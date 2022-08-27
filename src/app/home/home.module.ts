import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    HomeComponent,
    ChartPieComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
