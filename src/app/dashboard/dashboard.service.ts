import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class DashboardService {

  constructor(private httpSer: HttpService) { }


  getEvent() {
    this.httpSer.webapiUrl('Events');
    return this.httpSer.getData();
  }
}
