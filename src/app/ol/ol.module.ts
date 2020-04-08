import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlBaseComponent } from './ol-base/ol-base.component';
import { OlService } from './ol.service';



@NgModule({
  declarations: [OlBaseComponent],
  imports: [
    CommonModule,
  ],
  exports: [OlBaseComponent],
  providers: [OlService]
})
export class OlModule { }
