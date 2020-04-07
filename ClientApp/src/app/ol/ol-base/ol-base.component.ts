import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { Draw, Modify, Snap } from 'ol/interaction';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { transform } from 'ol/proj';
import GeometryType from 'ol/geom/GeometryType';
import Geometry from 'ol/geom/Geometry';
import LineString from 'ol/geom/LineString';
import { OlService } from '../ol.service';

@Component({
  selector: 'app-ol-base',
  templateUrl: './ol-base.component.html',
  styleUrls: ['./ol-base.component.scss']
})
export class OlBaseComponent implements OnInit, AfterViewInit {
  @Input()
  mapId = '';

  @ViewChild('tMap')
  mapElement: ElementRef ;

  constructor(public olDrawSer: OlService) {
    this.olDrawSer.olMap = this.createMap();
    window.document['map'] = this.olDrawSer.olMap;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.olDrawSer.olMap.setTarget(this.mapElement.nativeElement)
  }

  createMap() {
    const raster = new TileLayer({
      source: new OSM()
    });

    const dataX = 121.53;
    const dataY = 25.03;
    const dataSetPoint = [dataX, dataY]; // transform([dataX, dataY], 'EPSG:4326', 'EPSG:3857');
    const map = new Map({
      layers: [raster],// , vector],
      // target: this.mapId,
      view: new View({
        projection: 'EPSG:4326',
        center: dataSetPoint,
        zoom: 14
      })
    });
    return map;
  }

}
