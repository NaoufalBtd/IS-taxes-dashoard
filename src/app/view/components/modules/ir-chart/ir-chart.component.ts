import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-ir-chart',
  templateUrl: './ir-chart.component.html',
  styleUrls: ['./ir-chart.component.css'],
})
export class IrChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  barChartOptions: ChartOptions = {
    backgroundColor: '#570df8',
    responsive: true,
  };
  barChartLabels = ['Dec', 'Jan', 'Feb', 'Mar', 'Avr'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData = [{ data: [45, 37, 60, 70, 46, 33], label: 'IR Amount' }];
}
