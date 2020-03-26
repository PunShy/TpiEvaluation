import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackstageComponent } from './backstage.component';
import { EditorMapComponent } from './editor-map/editor-map.component';

const routes: Routes = [{ path: '', component: BackstageComponent,
  children: [
    {path: '', component: EditorMapComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackstageRoutingModule { }
