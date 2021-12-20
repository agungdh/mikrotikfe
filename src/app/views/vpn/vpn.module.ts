import { NgModule } from '@angular/core';
import { VpnComponent } from './vpn.component';
import { VpnRoutingModule } from './vpn-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    VpnRoutingModule,
    CommonModule,
  ],
  declarations: [ VpnComponent ]
})
export class VpnModule { }
