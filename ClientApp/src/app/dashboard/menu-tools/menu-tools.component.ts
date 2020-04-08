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
  showEventItems: IEventInfo[] = [];

  switchYear: string;
  switchSquad: string;


  constructor(public olSer: OlService, public dashSer: DashboardService) {
    this.dashSer.getEvent().subscribe((res: IEventInfo[]) => {
      this.eventItems = res;
      this.getYears();
    }, err => {

    });
  }

  ngOnInit(): void {
    this.olSer.drawInit();
    this.olSer.HeapmapInit();
  }

  getYears() {
    this.years = this.eventItems.map(item => {
      return item.year;
    }).filter((year, index, self) => {
      return self.indexOf(year) === index;
    });
  }
  selectYearEvent() {
    if (this.showEventItems.length === 0) {
      this.showEventItems = this.eventItems.map(a => a);
    }
    this.showEventItems = this.showEventItems.filter(a => {
      if (this.switchYear === 'ALL') {
        return !!a.year;
      }
      return a.year === this.switchYear;
    });
    this.makeRoadFeatures();
  }
  selectSquadEvent() {
    if (this.showEventItems.length === 0) {
      this.showEventItems = this.eventItems.map(a => a);
    }
    this.showEventItems = this.showEventItems.filter(a => {
      if (this.switchSquad === 'ALL') {
        return !!a.squadId;
      }
      return a.squadId.toString() === this.switchSquad;
    });
    this.makeRoadFeatures();
  }
  private makeRoadFeatures() {
    this.olSer.clearDeawView();
    this.showEventItems.forEach(ele => {
      ele.feature = this.olSer.createLineFeature([[ele.StartX, ele.StartY], [ele.EndX, ele.EndY]]);
      this.olSer.addDrawFeature(ele.feature);
    });
  }

  private makeHeatmapFeatures() {
    this.olSer.clearDeawView();
    this.showEventItems.forEach(ele => {
      const point1 = this.olSer.createPointFeature([ele.StartX, ele.StartY]);
      this.olSer.addHeatmapFeature(point1);
      const point2 = this.olSer.createPointFeature([ele.EndX, ele.EndY]);
      this.olSer.addHeatmapFeature(point2);
    });
  }

  slideHeatmapChnage(val: boolean) {
    if (val) {
      this.makeHeatmapFeatures();
    } else {
      this.olSer.clearHeatmapFeature();
      this.makeRoadFeatures();
    }
  }

}
