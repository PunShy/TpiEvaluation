import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { OlBaseComponent } from 'src/app/ol/ol-base/ol-base.component';
import { OlService } from 'src/app/ol/ol.service';
import { Feature } from 'ol';


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

  isShowEditor = true;

  olMapDrawInit = false;

  constructor(public olSer: OlService) {
  }

  ngOnInit(): void {
    this.dataTitle = ColumnTitle;
    this.dataSource = {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: []
    };


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

  reomveDrawFromDataList(val: IEventInfo) {
    const selTab = this.getSelectedTab();
    this.dataSource[selTab] = this.dataSource[selTab].filter(item => {
      return item !== val;
    });
    this.olSer.deleteFeature(val.feature);
  }
  addDrawToDataList(feature1: Feature, cbThis: any) {
    const datas: IEventInfo[] = [{
      year: '2021/03/20',
      town: '63000103',
      roadName: '忠孝東路一段99巷',
      roadLength: '99',
      feature: feature1,
      squad: (cbThis.selectedSquad + 1).toString()
    }];
    const target = cbThis as EditorMapComponent;
    const selTab = target.getSelectedTab();
    target.dataSource[selTab] = target.dataSource[selTab].concat(datas);
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
  town?: string;
  squad?: string;
}
export interface IOlFeature {
  feature?: Feature;
}
export interface IEventInfo extends ITaskInfo, IOlFeature {
  roadName?: string;
  roadLength?: string;

}

export const ColumnTitle: IEventInfo = {
  year: '日期',
  town: '行政區',
  roadName: '道路名稱',
  roadLength: '道路長度(公尺)'
}

export const townName: { id: string, name: string }[] = [
  { id: '63000103', name: '大同區' },
  { id: '63000104', name: '中山區' }
];

const ELEMENT_DATA: IEventInfo[] = [
  // {
  //   year: '2020/03/20',
  //   town: '63000103',
  //   roadName: '忠孝東路一段80巷',
  //   roadLength: '13'
  // },
  // {
  //   year: '2020/03/21',
  //   town: '63000104',
  //   roadName: '忠孝東路一段80巷',
  //   roadLength: '14'
  // },
  // {
  //   year: '2020/03/22',
  //   town: '63000103',
  //   roadName: '忠孝東路一段80巷',
  //   roadLength: '15'
  // },
  // {
  //   year: '2020/03/23',
  //   town: '63000104',
  //   roadName: '忠孝東路一段80巷',
  //   roadLength: '16'
  // },
  // {
  //   year: '2020/03/24',
  //   town: '63000103',
  //   roadName: '忠孝東路一段80巷',
  //   roadLength: '13'
  // },
];
