import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: '/interface',
        pathMatch: 'full'
      },
      {
        path: 'interface',
        loadChildren: () => import('./views/interface/interface.module').then(m => m.InterfaceModule)
      },
      {
        path: 'vpn',
        loadChildren: () => import('./views/vpn/vpn.module').then(m => m.VpnModule)
      },
    ]
  },
  { path: '**', redirectTo: '/interface' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

