import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OlModule } from '../ol/ol.module';
import { MenuToolsComponent } from './menu-tools/menu-tools.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  declarations: [DashboardComponent, MenuToolsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgMaterialModule,
    OlModule
  ]
})
export class DashboardModule { }
