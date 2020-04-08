import { Injectable } from '@angular/core';
import { BackstageModule } from './backstage.module';
import { HttpService } from '../http.service';
import { MessageComponent } from './message/message.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class BackstageService {

  constructor(private httpSer: HttpService, private snackBar: MatSnackBar) { }

  showMessage(inputVal: { title: string, message?: string ,success?: string, error?: string }, durationInSeconds?: number) {
    durationInSeconds = (!durationInSeconds)? 1 : durationInSeconds;
    this.snackBar.openFromComponent(MessageComponent, {
      data: inputVal,
      duration: durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }


  getTown() {
    this.httpSer.webapiUrl('Towns');
    return this.httpSer.getData();
  }

  getEvent() {
    this.httpSer.webapiUrl('Events');
    return this.httpSer.getData();
  }
  saveEvent(data: any) {
    this.httpSer.webapiUrl('Events');
    return this.httpSer.postData(data);
  }
  deleteEvent(id: string) {
    this.httpSer.webapiUrl('Events');
    return this.httpSer.deleteData(id);
  }

}
