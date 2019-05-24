import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesChartRoutingModule } from './sales-chart-routing.module';
import { SalesChartComponent } from './sales-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [SalesChartComponent, BarChartComponent, PieChartComponent, RadarChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule,
    SalesChartRoutingModule,
    ChartsModule
  ]
})
export class SalesChartModule { }
