import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackstageComponent } from './backstage.component';
import { EditorMapComponent } from './editor-map/editor-map.component';
import { AbcComponent } from './abc/abc.component';

const routes: Routes = [{
  path: '', component: BackstageComponent,
  children: [
    { path: '', component: EditorMapComponent },
    // { path: 'abc', component: AbcComponent },// 測試路徑規則
  ]
},
{
  path: 'abc', component: AbcComponent,// 測試路徑規則

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackstageRoutingModule { }
