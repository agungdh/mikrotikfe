import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfaceComponent } from './interface.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceComponent,
    data: {
      title: 'Interface'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfaceRoutingModule {}
