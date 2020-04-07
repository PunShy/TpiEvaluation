import { Component, OnInit, Input } from '@angular/core';
import { OlService } from 'src/app/ol/ol.service';
import { DashboardService } from '../dashboard.service';
import { IEventInfo } from 'src/app/backstage/editor-map/editor-map.component';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-menu-tools',
  templateUrl: './menu-tools.component.html',
  styleUrls: ['./menu-tools.component.scss']
})
export class MenuToolsComponent implements OnInit {
  @Input()
  years: string[] = [];
  squads: any[] = [
    { value: '1', text: '第一分隊' },
    { value: '2', text: '第二分隊' },
    { value: '3', text: '第三分隊' },
    { value: '4', text: '第四分隊' },
    { value: '5', text: '第五分隊' },
    { value: '6', text: '第六分隊' },
  ];
  eventItems: IEventInfo[];

  constructor(public olSer: OlService, public dashSer: DashboardService) {
    this.dashSer.getEvent().subscribe((res: IEventInfo[]) => {
      this.eventItems = res;
      this.getYears();
    }, err => {

    });
  }

  ngOnInit(): void {
    this.olSer.drawInit();
  }

  getYears() {
    this.years = this.eventItems.map(item => {
      return item.year;
    }).filter((year, index, self) => {
      return self.indexOf(year) === index;
    });
  }
  selectEventOfYear(year: MatSelectChange) {
    const aa = this.eventItems.filter(a => {
      return a.year === year.value;
    });
    aa.forEach(ele => {
      ele.feature = this.olSer.createLineFeature([[ele.StartX, ele.StartY], [ele.EndX, ele.EndY]]);
      this.olSer.addDrawFeature(ele.feature);
    });;
  }

  slideChnage(val: any) {

  }

}
