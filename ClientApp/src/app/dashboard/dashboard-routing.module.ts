import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MenuToolsComponent } from './menu-tools/menu-tools.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    { path: '', component: MenuToolsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
