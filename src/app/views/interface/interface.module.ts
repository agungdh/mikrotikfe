import { NgModule } from '@angular/core';
import { InterfaceComponent } from './interface.component';
import { InterfaceRoutingModule } from './interface-routing.module';
import { CommonModule } from '@angular/common';
import { GaugeChartModule } from 'angular-gauge-chart'
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    InterfaceRoutingModule,
    CommonModule,
    GaugeChartModule,
    NgxChartsModule,
  ],
  declarations: [ InterfaceComponent ]
})
export class InterfaceModule { }
