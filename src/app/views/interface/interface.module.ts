import { NgModule } from '@angular/core';
import { InterfaceComponent } from './interface.component';
import { InterfaceRoutingModule } from './interface-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    InterfaceRoutingModule,
    CommonModule,
  ],
  declarations: [ InterfaceComponent ]
})
export class InterfaceModule { }
