import { Component, OnInit, Input } from '@angular/core';
import { OlService } from 'src/app/ol/ol.service';
import { DashboardService } from '../dashboard.service';
import { IEventInfo } from 'src/app/backstage/editor-map/editor-map.component';
import { MatSelectChange } from '@angular/material/select';
import GeoJSON from 'ol/format/GeoJSON';
import * as turf from '@turf/turf'


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
      this.alongPointMarker(point1, point2);
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

  // 沿著指定線，產生指定距離的新點
  alongPointMarker(startFeature, endFeature) {
    const format = new GeoJSON();
    const turfPoint1: any = format.writeFeatureObject(startFeature);
    const turfPoint2: any = format.writeFeatureObject(endFeature);
    const options: { units?: any } = { units: 'kilometers' };

    const length = turf.distance(turfPoint1, turfPoint2, options);
    const line = turf.lineString([turfPoint1.geometry.coordinates, turfPoint2.geometry.coordinates])
    const distance = 0.1;// km
    for (let i = 0; i <= length/ distance; i++) {
      const nextPoint = turf.along(line, i * distance, options);

      this.olSer.addHeatmapFeature(format.readFeature(nextPoint));
    }
  }


}
