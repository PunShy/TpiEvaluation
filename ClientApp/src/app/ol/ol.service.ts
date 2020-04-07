import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { Draw, Modify, Snap } from 'ol/interaction';
import { Tile as TileLayer, Vector as VectorLayer, Heatmap as HeatmapLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { transform } from 'ol/proj';
import GeometryType from 'ol/geom/GeometryType';
import Geometry from 'ol/geom/Geometry';
import { DrawEvent } from 'ol/interaction/Draw';
import { Feature } from 'ol';
import BaseLayer from 'ol/layer/Base';
import LineString from 'ol/geom/LineString';

@Injectable()
export class OlService {

  olMap: Map;
  private modify: Modify;
  private drawSource: VectorSource<Geometry>;
  private draw: Draw;
  private snap: Snap;

  constructor() { }

  openDraw(type: string, callBack?: (x: Feature, cbThis: any) => void, callbackThis?: any) {
    this.addInteractions(this.drawSource, type);

    this.draw.on('drawend', (item: DrawEvent) => {
      // console.log('drawend', item.feature, item.target);
      if (!!callBack) {
        callBack(item.feature, callbackThis);
      }
    });
  }
  closeDraw() {
    this.reomveInteractions();
  }


  drawInit() {
    this.drawSource = this.createDrawSource();
    const drawLayer = this.createDrawLayer(this.drawSource);
    this.olMap.addLayer(drawLayer);
    // this.addInteractions(this.drawSource, 'LINE_STRING');

  }

  modifyUse(isModify: boolean) {
    if (isModify) {
      const source = this.drawSource;
      this.modify = new Modify({ source });
      this.olMap.addInteraction(this.modify);
    } else {
      this.olMap.removeInteraction(this.modify);
    }
  }

  clearDeawView() {
    this.drawSource.clear();
  }
  deleteDrawFeature(feature: Feature) {
    this.drawSource.removeFeature(feature);
  }
  addDrawFeature(feature: Feature) {
    this.drawSource.addFeature(feature);
  }
  createLineFeature(line: string[][]) {
    const line1: number[][] = [[parseFloat(line[0][0]), parseFloat(line[0][1])], [parseFloat(line[1][0]), parseFloat(line[1][1])]];
    const lineFeature = new Feature(new LineString(line1));
    return lineFeature;
  }

  private reomveInteractions() {
    this.olMap.removeInteraction(this.draw);
    this.olMap.removeInteraction(this.snap);
  }
  private addInteractions(source: VectorSource<Geometry>, type: string) {
    this.draw = new Draw({
      source,
      type: GeometryType[type],
      // POINT		Point
      // LINE_STRING		LineString
      // LINEAR_RING		LinearRing
      // POLYGON		Polygon
      // MULTI_POINT		MultiPoint
      // MULTI_LINE_STRING		MultiLineString
      // MULTI_POLYGON		MultiPolygon
      // GEOMETRY_COLLECTION		GeometryCollection
      // CIRCLE		Circle
    });
    this.olMap.addInteraction(this.draw);


    // 下面為 方便解析OL的規劃邏輯用
    window.document['draw'] = this.draw;
    // document.draw.removeLastPoint()
    // document.draw.finishDrawing()
    // drawend.feature.getGeometry().getCoordinates()
    // document.draw.getOverlay().getSource().getFeatures()[0].getGeometry().getCoordinates()
    // document.map.getLayers().getArray()[1].getSource().getFeatures()[2].getGeometry().getCoordinates()
    // document.map.getLayers().getArray()[1].getSource().removeFeature(feature1)


    this.snap = new Snap({ source });
    this.olMap.addInteraction(this.snap);
  }


  private createDrawSource() {
    const source: VectorSource<Geometry> = new VectorSource();
    return source;
  }
  private createDrawLayer(source: VectorSource<Geometry>) {
    const vector = new VectorLayer({
      source,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 184, 34, 0.2)'
        }),
        stroke: new Stroke({
          color: '#1cac81',
          width: 3
        }),
        image: new CircleStyle({
          radius: 4,
          fill: new Fill({
            color: '#1cac81'
          })
        })
      })
    });
    return vector;
  }

  private createHeatmapLayer(source: VectorSource<Geometry>) {
    const vector = new HeatmapLayer({
      source,
      blur: 10,// parseInt(blur.value, 10),
      radius: 10,// parseInt(radius.value, 10),
      weight: (feature) => {
        const name = feature.get('name');
        const magnitude = parseFloat(name.substr(2));
        return magnitude - 5;
      }
    });
  }

}
