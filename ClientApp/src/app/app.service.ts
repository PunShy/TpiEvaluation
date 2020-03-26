import { Injectable } from '@angular/core';
import { IBreadcrumbsLink } from './header/header/header.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  ibl: IBreadcrumbsLink = {
    home: '',
    links: []
  };

  constructor(private http: HttpClient) { }


  getTowns(){
    // return this.http.get('/api/Towns');
  }


}

