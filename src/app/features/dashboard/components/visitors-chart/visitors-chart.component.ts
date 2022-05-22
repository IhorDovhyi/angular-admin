import {Component, Input, OnInit} from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";

@Component({
  selector: 'app-visitors-chart',
  templateUrl: './visitors-chart.component.html',
  styleUrls: ['./visitors-chart.component.scss'],
})
export class VisitorsChartComponent {
  @Input() lineChartData!: any;
  @Input() lineChartOptions!: ChartConfiguration['options'];
  @Input() lineChartType!: ChartType;



}
