import { Injectable } from '@angular/core';
import { BackstageModule } from './backstage.module';
import { HttpService } from '../http.service';

@Injectable()
export class BackstageService {

  constructor(private httpSer: HttpService) { }


  getTown(){
    this.httpSer.webapiUrl('Towns');
    return this.httpSer.getData();
  }

  saveData(data: any){

  }

}
