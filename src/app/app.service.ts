import { Injectable } from '@angular/core';
import { IBreadcrumbsLink } from './header/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  ibl: IBreadcrumbsLink = {
    home: '',
    links: []
  };

  constructor() { }

}

