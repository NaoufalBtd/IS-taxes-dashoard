import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Invoice } from 'src/app/controller/models/invoice.model';
import { InvoiceService } from 'src/app/controller/services/invoice.service';

@Component({
  selector: 'app-turnover-chart',
  templateUrl: './turnover-chart.component.html',
  styleUrls: ['./turnover-chart.component.css'],
})
export class TurnoverChartComponent implements OnInit {
  incomeInvoice: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) {}
  ngOnInit(): void {
    this.incomeInvoice = this.invoiceService.getIncomeInvoice();
    console.log(this.incomeInvoice);
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
          display: false,
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
  public chartLabels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  public chartType = 'line';
  public chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Income',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(13, 148, 136)',
        backgroundColor: 'rgba(13, 148, 136, 0.1)',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Expenses',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(87, 13, 248)',
        backgroundColor: 'rgba(87, 13, 248, 0.1)',
      },
    ],
  };
}
