import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VpnComponent } from './vpn.component';

const routes: Routes = [
  {
    path: '',
    component: VpnComponent,
    data: {
      title: 'Vpn'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VpnRoutingModule {}
