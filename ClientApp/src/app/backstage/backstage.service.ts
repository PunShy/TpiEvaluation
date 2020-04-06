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

  getEvent(){
    this.httpSer.webapiUrl('Events');
    return this.httpSer.getData();
  }
  saveEvent(data: any){
    this.httpSer.webapiUrl('Events');
    return this.httpSer.postData(data);
  }
  deleteEvent(id: string){
    this.httpSer.webapiUrl('Events');
    return this.httpSer.deleteData(id);
  }

}
