import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { OlService } from '../ol/ol.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(appSer: AppService, public olSer: OlService) {
  }

  ngOnInit(): void {
  }



}
