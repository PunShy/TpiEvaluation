import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackstageRoutingModule } from './backstage-routing.module';
import { BackstageComponent } from './backstage.component';
import { OlModule } from '../ol/ol.module';
import { EditorMapComponent } from './editor-map/editor-map.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EventsInTaskComponent } from './events-in-task/events-in-task.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BackstageService } from './backstage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BackstageComponent, EditorMapComponent, AddTaskComponent, EventsInTaskComponent, ],
  imports: [
    CommonModule,
    BackstageRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgMaterialModule,
    OlModule
  ],
  providers: [BackstageService]
})
export class BackstageModule { }
