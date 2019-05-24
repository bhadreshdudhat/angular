import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesChartComponent } from './sales-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  {
    path: '', // it's actually app/saleschart So routerLink="/app/saleschart/bar-chart" in view
    component: SalesChartComponent,
    children: 
    [
      { path: '', redirectTo: '/app/saleschart/bar-chart', pathMatch: 'full' },
      { path: 'bar-chart', component: BarChartComponent },
      { path: 'doughnut-chart', component: DoughnutChartComponent },
      { path: 'radar-chart', component: RadarChartComponent }, 
      { path: 'pie-chart', component: PieChartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesChartRoutingModule { }
