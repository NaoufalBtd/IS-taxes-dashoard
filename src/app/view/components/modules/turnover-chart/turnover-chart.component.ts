import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Invoice } from 'src/app/controller/models/invoice.model';
import { InvoiceService } from 'src/app/controller/services/invoice.service';
import { getChartData } from 'src/app/shared/utils';

@Component({
  selector: 'app-turnover-chart',
  templateUrl: './turnover-chart.component.html',
  styleUrls: ['./turnover-chart.component.css'],
})
export class TurnoverChartComponent implements OnInit {
  incomeInvoice: Invoice[] = [];
  incomeData: number[] = [];
  expenseData: number[] = [];
  chartLabels: string[] = [];
  isLoaded = false;

  constructor(private invoiceService: InvoiceService) {}
  ngOnInit(): void {
    this.invoiceService.fetchIncomeStatistics();
    this.invoiceService.incomeCount$.subscribe((data) => {
      const chartData = getChartData(data);
      this.incomeData = chartData.data;
      this.chartLabels = chartData.labels;
      this.chartData = this.generateChartData();
    });

    this.invoiceService.fetchExpensesStatistics();
    this.invoiceService.expensesCount$.subscribe((data) => {
      const chartData = getChartData(data);
      this.expenseData = chartData.data;
      this.chartData = this.generateChartData();
    });
  }

  public chartOptions: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520,
    },
    // maintainAspectRatio: false,
    elements: {
      // point: {
      //   radius: 1,
      //   hoverRadius: 4,
      // },
    },
    layout: {
      padding: 16,
    },
    scales: {
      y: {
        stacked: true,
        // ticks: {},
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#fbfbfb',
          font: {
            size: 11,
            family: 'Open Sans',
            style: 'normal',
            lineHeight: 2,
          },
        },
      },
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: true,
          color: '#ccc',
          padding: 20,
          font: {
            size: 11,
            family: 'Open Sans',
            style: 'normal',
            lineHeight: 2,
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        displayColors: true,
        bodyAlign: 'center',
        titleAlign: 'center',
      },
      title: {
        display: true,
        text: 'Company Turnover',
        font: {
          size: 20,
          weight: '400',
        },
        padding: 0,
      },
      // subtitle: {
      //   display: true,
      //   text: 'Total number of meetings by teams in associated organizations',
      //   font: {
      //     size: 12,
      //     weight: '300',
      //     style: 'italic',
      //   },
      //   padding: {
      //     bottom: 8,
      //     top: 0,
      //   },
      // },
    },
  };
  public chartType = 'line';
  public chartData: ChartConfiguration<'line'>['data'] =
    this.generateChartData();
  generateChartData() {
    return {
      labels: this.chartLabels,
      datasets: [
        {
          data: this.incomeData,
          label: 'Income',
          fill: true,
          tension: 0.5,
          borderColor: 'rgb(13, 148, 136)',
          backgroundColor: 'rgba(13, 148, 136, 0.1)',
        },
        {
          data: this.expenseData,
          label: 'Expenses',
          fill: true,
          tension: 0.5,
          borderColor: 'rgb(87, 13, 248)',
          backgroundColor: 'rgba(87, 13, 248, 0.1)',
        },
      ],
    };
  }
}
