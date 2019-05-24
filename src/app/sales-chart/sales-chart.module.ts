import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesChartRoutingModule } from './sales-chart-routing.module';
import { SalesChartComponent } from './sales-chart.component';

@NgModule({
  declarations: [SalesChartComponent],
  imports: [
    CommonModule,
    SalesChartRoutingModule
  ]
})
export class SalesChartModule { }
