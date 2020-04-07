import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { OlBaseComponent } from 'src/app/ol/ol-base/ol-base.component';
import { OlService } from 'src/app/ol/ol.service';
import { Feature } from 'ol';
import { BackstageService } from '../backstage.service';
import { fromEvent } from 'rxjs';
import LineString from 'ol/geom/LineString';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-editor-map',
  templateUrl: './editor-map.component.html',
  styleUrls: ['./editor-map.component.scss']
})
export class EditorMapComponent implements OnInit {

  @ViewChild('tProtlet', { static: true }) protlet: ElementRef;

  selectedSquad = 0;
  dataTitle;

  dataSource: ITaskDatas;

  isShowEditor = false;

  olMapDrawInit = false;
  towns: ITown[] = [];
  selTowns: ITown[] = [];

  constructor(public olSer: OlService, private backstageSer: BackstageService) {
    this.backstageSer.getTown().subscribe((res: ITown[]) => {
      this.towns = res;
    });
    this.backstageSer.getEvent().subscribe((res: IEventInfo[]) => {
      this.dataSource = {
        data1: this.filterEvents(res, 1),
        data2: this.filterEvents(res, 2),
        data3: this.filterEvents(res, 3),
        data4: this.filterEvents(res, 4),
        data5: this.filterEvents(res, 5),
        data6: this.filterEvents(res, 6),
      };
    }, err => {

    });
  }
  filterEvents(res: IEventInfo[], squadId: number): IEventInfo[] {
    const datas = res.filter(event => {
      return event.squadId === squadId;
    });
    datas.forEach(a => {
      this.transformFeature(a);
      this.transformYear(a);
    });
    return datas;
  }
  transformFeature(event1: IEventInfo): IEventInfo {
    event1.feature = this.olSer.createLineFeature([[event1.StartX, event1.StartY], [event1.EndX, event1.EndY]]);
    return event1;
  }
  transformYear(event1: IEventInfo): IEventInfo {
    if (!!event1.year) {
      event1.yearInput = new FormControl(new Date(event1.year));
    } else {
      event1.yearInput = new FormControl(Date.now);
    }
    return event1;
  }

  ngOnInit(): void {
    this.dataTitle = ColumnTitle;
    if (!this.dataSource) {
      this.dataSource = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
        data5: [],
        data6: []
      };
    }
    this.drawInit();
  }

  selectedChange(target: HTMLElement) {
    if (target.tagName.toLocaleLowerCase() === 'i') {
      target = target.parentElement;
    }
    const btns = document.querySelectorAll('#mapToolBar .btn.btn-secondary');
    btns.forEach(item => {
      if (target === item) {
        const isActive = target.className.indexOf('btn-warning-active');
        if (isActive >= 0) {
          target.classList.remove('btn-warning-active');
        } else {
          target.classList.add('btn-warning-active');
        }
      } else {
        item.classList.remove('btn-warning-active');
      }
    });
  }

  goSubmit(val: IEventInfo) {
    const datas = Object.assign({}, val);
    const coordinates1 = (val.feature.getGeometry() as LineString).getCoordinates();
    datas.StartX = coordinates1[0][0].toString();
    datas.StartY = coordinates1[0][1].toString();
    datas.EndX = coordinates1[1][0].toString();
    datas.EndY = coordinates1[1][1].toString();
    datas.squadId = this.selectedSquad + 1;
    datas.feature = null;
    datas.yearInput = null;


    this.backstageSer.saveEvent(datas).subscribe((res: IEventInfo) => {
      val.Id = res.Id;
      val.TaskId = res.TaskId;

      this.backstageSer.showMessage({ title: '訊息', success: '儲存成功' }, 5);
    }, err => {
      this.backstageSer.showMessage({ title: '訊息', error: '儲存失敗' }, 5);
    });
  }

  reomveDrawFromDataList(val: IEventInfo) {
    const selTab = this.getSelectedTab();
    this.dataSource[selTab] = this.dataSource[selTab].filter(item => {
      return item !== val;
    });
    this.olSer.deleteFeature(val.feature);

    if (!!val.Id) {
      this.backstageSer.deleteEvent(val.Id).subscribe(res => {
        console.log(res);
      }, err => {

      });
    }
  }
  addDrawToDataList(feature1: Feature, cbThis: any) {
    const target = cbThis as EditorMapComponent;
    const selTab = target.getSelectedTab();
    const targetTab = target.dataSource[selTab];
    const datas: IEventInfo[] = [{
      Sort: targetTab.length,
      year: new Date().toISOString().substring(0, 10),
      TownId: '未輸入',
      RoadName: '未輸入',
      RoadLength: '0',
      feature: feature1,
      squadId: (cbThis.selectedSquad + 1).toString(),
    }];
    cbThis.transformYear(datas[0]);
    target.dataSource[selTab] = targetTab.concat(datas);
  }
  drawLine(target: HTMLElement) {
    this.selectedChange(target);
    this.olSer.closeDraw();
    if (!this.isUseBtn(target)) { return; }
    this.olSer.openDraw('LINE_STRING', this.addDrawToDataList, this);
  }
  drawPoint(target: HTMLElement) {
    this.selectedChange(target);
    this.olSer.closeDraw();
    if (!this.isUseBtn(target)) { return; }
    this.olSer.openDraw('POINT', this.addDrawToDataList, this);
  }
  modifyState(target: HTMLInputElement) {
    if (target.checked) {
      this.olSer.modifyUse(true);
    } else {
      this.olSer.modifyUse(false);
    }
  }
  drawInit() {
    if (!this.olMapDrawInit) {
      this.olMapDrawInit = true;
      this.olSer.drawInit();
    }
  }
  isUseBtn(target: HTMLElement) {
    if (target.className.indexOf('btn-warning-active') === -1) {
      return false;
    }
    return true;
  }

  editorOpenClose() {
    this.isShowEditor = !this.isShowEditor;
    if (this.isShowEditor) {
      this.selectedSquad = 0;
      this.changeTowns(this.selectedSquad + 1);
      this.olViewChange();
    } else {
      this.olSer.clearView();
    }
  }

  public getSelectedTab() {
    switch (this.selectedSquad) {// delete List data
      case 0:
        return 'data1';
        break;
      case 1:
        return 'data2';
        break;
      case 2:
        return 'data3';
        break;
      case 3:
        return 'data4';
        break;
      case 4:
        return 'data5';
        break;
      case 5:
        return 'data6';
        break;
    }
  }

  changeTowns(val: number) {
    this.selTowns = this.towns.filter(item => {
      return item.SquadId === val;
    });
  }
  olViewChange() {
    this.olSer.clearView();
    const selTab = this.getSelectedTab();
    if (!!selTab) {
      this.dataSource[selTab].forEach(d => {
        this.olSer.addFeature(d.feature);
      });
    }
  }
}

export interface ITaskDatas {
  data1: IEventInfo[],
  data2: IEventInfo[],
  data3: IEventInfo[],
  data4: IEventInfo[],
  data5: IEventInfo[],
  data6: IEventInfo[],
}

export interface ITaskInfo {
  year?: string;
  yearInput?: any;
  TownId?: string;
  townText?: string;
  squadId?: number;
}
export interface IOlFeature {
  feature?: Feature;
}
export interface IEventInfo extends ITaskInfo, IOlFeature {
  Id?: string;
  TaskId?: string;
  Sort?: number;
  RoadName?: string;
  RoadLength?: string;
  RoadStart?: string;
  RoadEnd?: string;
  RoadWidth?: string;
  SidewalkStart?: string;
  SidewalkEnd?: string;
  SidewalkLength?: string;
  Memo?: string;
  StartX?: string;
  StartY?: string;
  EndX?: string;
  EndY?: string;
}
export interface ITown {
  Id: string;
  TownText: string;
  SquadId: number;
}

export const ColumnTitle: IEventInfo = {
  year: '日期',
  townText: '行政區',
  RoadName: '道路名稱',
  RoadLength: '道路長度(公尺)'
}

// export const townName: { id: string, name: string }[] = [
//   { id: '63000103', name: '大同區' },
//   { id: '63000104', name: '中山區' }
// ];

// const ELEMENT_DATA: IEventInfo[] = [
//   // {
//   //   year: '2020/03/20',
//   //   town: '63000103',
//   //   roadName: '忠孝東路一段80巷',
//   //   roadLength: '13'
//   // },
//   // {
//   //   year: '2020/03/21',
//   //   town: '63000104',
//   //   roadName: '忠孝東路一段80巷',
//   //   roadLength: '14'
//   // },
//   // {
//   //   year: '2020/03/22',
//   //   town: '63000103',
//   //   roadName: '忠孝東路一段80巷',
//   //   roadLength: '15'
//   // },
//   // {
//   //   year: '2020/03/23',
//   //   town: '63000104',
//   //   roadName: '忠孝東路一段80巷',
//   //   roadLength: '16'
//   // },
//   // {
//   //   year: '2020/03/24',
//   //   town: '63000103',
//   //   roadName: '忠孝東路一段80巷',
//   //   roadLength: '13'
//   // },
// ];
