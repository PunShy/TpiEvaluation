function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TDBs:function(e,t,a){"use strict";a.r(t),a.d(t,"DashboardModule",(function(){return F}));var n,r,s=a("ofXK"),i=a("tyNb"),o=a("fXoL"),c=a("F5nt"),u=a("lyOD"),l=((n=function(){function e(t){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||n)(o.Ob(c.a))},n.\u0275cmp=o.Ib({type:n,selectors:[["app-dashboard"]],decls:3,vars:1,consts:[[1,"dashboard"],[1,"map",3,"mapId"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Pb(1,"router-outlet"),o.Pb(2,"app-ol-base",1),o.Tb()),2&e&&(o.Cb(2),o.lc("mapId","dashboardMap"))},directives:[i.f,u.a],styles:[".dashboard[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]{width:100%;height:500px}"]}),n),h=a("Sa/z"),f=a("F11b"),b=((r=function(){function e(t){_classCallCheck(this,e),this.httpSer=t}return _createClass(e,[{key:"getEvent",value:function(){return this.httpSer.webapiUrl("Events"),this.httpSer.getData()}}]),e}()).\u0275fac=function(e){return new(e||r)(o.Yb(f.a))},r.\u0275prov=o.Kb({token:r,factory:r.\u0275fac}),r),m=a("kmnG"),p=a("d3UM"),v=a("FKr1"),d=a("1jcm");function C(e,t){if(1&e&&(o.Ub(0,"mat-option",6),o.Cc(1),o.Tb()),2&e){var a=t.$implicit;o.lc("value",a),o.Cb(1),o.Ec(" ",a," ")}}function w(e,t){if(1&e&&(o.Ub(0,"mat-option",6),o.Cc(1),o.Tb()),2&e){var a=t.$implicit;o.lc("value",a.value),o.Cb(1),o.Ec(" ",a.text," ")}}var g,y,S,k=[{path:"",component:l,children:[{path:"",component:(g=function(){function e(t,a){var n=this;_classCallCheck(this,e),this.olSer=t,this.dashSer=a,this.years=[],this.squads=[{value:"1",text:"\u7b2c\u4e00\u5206\u968a"},{value:"2",text:"\u7b2c\u4e8c\u5206\u968a"},{value:"3",text:"\u7b2c\u4e09\u5206\u968a"},{value:"4",text:"\u7b2c\u56db\u5206\u968a"},{value:"5",text:"\u7b2c\u4e94\u5206\u968a"},{value:"6",text:"\u7b2c\u516d\u5206\u968a"}],this.showEventItems=[],this.dashSer.getEvent().subscribe((function(e){n.eventItems=e,n.getYears()}),(function(e){}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.olSer.drawInit(),this.olSer.HeapmapInit()}},{key:"getYears",value:function(){this.years=this.eventItems.map((function(e){return e.year})).filter((function(e,t,a){return a.indexOf(e)===t}))}},{key:"selectYearEvent",value:function(){var e=this;0===this.showEventItems.length&&(this.showEventItems=this.eventItems.map((function(e){return e}))),this.showEventItems=this.showEventItems.filter((function(t){return"ALL"===e.switchYear?!!t.year:t.year===e.switchYear})),this.makeRoadFeatures()}},{key:"selectSquadEvent",value:function(){var e=this;0===this.showEventItems.length&&(this.showEventItems=this.eventItems.map((function(e){return e}))),this.showEventItems=this.showEventItems.filter((function(t){return"ALL"===e.switchSquad?!!t.squadId:t.squadId.toString()===e.switchSquad})),this.makeRoadFeatures()}},{key:"makeRoadFeatures",value:function(){var e=this;this.olSer.clearDeawView(),this.showEventItems.forEach((function(t){t.feature=e.olSer.createLineFeature([[t.StartX,t.StartY],[t.EndX,t.EndY]]),e.olSer.addDrawFeature(t.feature)}))}},{key:"makeHeatmapFeatures",value:function(){var e=this;this.olSer.clearDeawView(),this.showEventItems.forEach((function(t){var a=e.olSer.createPointFeature([t.StartX,t.StartY]);e.olSer.addHeatmapFeature(a);var n=e.olSer.createPointFeature([t.EndX,t.EndY]);e.olSer.addHeatmapFeature(n)}))}},{key:"slideHeatmapChnage",value:function(e){e?this.makeHeatmapFeatures():(this.olSer.clearHeatmapFeature(),this.makeRoadFeatures())}}]),e}(),g.\u0275fac=function(e){return new(e||g)(o.Ob(h.a),o.Ob(b))},g.\u0275cmp=o.Ib({type:g,selectors:[["app-menu-tools"]],inputs:{years:"years"},decls:24,vars:4,consts:[[3,"value","selectionChange","valueChange"],["value",""],["value","ALL"],[3,"value",4,"ngFor","ngForOf"],[1,"margin-left"],[1,"heatmap-toggle",3,"change"],[3,"value"]],template:function(e,t){1&e&&(o.Ub(0,"div"),o.Ub(1,"span"),o.Ub(2,"mat-form-field"),o.Ub(3,"mat-label"),o.Cc(4,"\u5e74\u4efd"),o.Tb(),o.Ub(5,"mat-select",0),o.cc("selectionChange",(function(){return t.selectYearEvent()}))("valueChange",(function(e){return t.switchYear=e})),o.Ub(6,"mat-option",1),o.Cc(7,"\u672a\u9078\u53d6"),o.Tb(),o.Ub(8,"mat-option",2),o.Cc(9,"\u5168\u5e74\u4efd"),o.Tb(),o.Ac(10,C,2,2,"mat-option",3),o.Tb(),o.Tb(),o.Tb(),o.Ub(11,"span",4),o.Ub(12,"mat-form-field"),o.Ub(13,"mat-label"),o.Cc(14,"\u5206\u968a"),o.Tb(),o.Ub(15,"mat-select",0),o.cc("selectionChange",(function(){return t.selectSquadEvent()}))("valueChange",(function(e){return t.switchSquad=e})),o.Ub(16,"mat-option",1),o.Cc(17,"\u672a\u9078\u53d6"),o.Tb(),o.Ub(18,"mat-option",2),o.Cc(19,"\u5168\u5206\u968a"),o.Tb(),o.Ac(20,w,2,2,"mat-option",3),o.Tb(),o.Tb(),o.Tb(),o.Ub(21,"span",4),o.Ub(22,"mat-slide-toggle",5),o.cc("change",(function(e){return t.slideHeatmapChnage(e.checked)})),o.Cc(23,"\u958b\u555f\u71b1\u5340\u5716"),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Cb(5),o.lc("value",t.switchYear),o.Cb(5),o.lc("ngForOf",t.years),o.Cb(5),o.lc("value",t.switchSquad),o.Cb(5),o.lc("ngForOf",t.squads))},directives:[m.c,m.g,p.a,v.o,s.s,d.a],styles:[".margin-left[_ngcontent-%COMP%]{margin-left:20px}"]}),g)}]}],E=((y=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:y}),y.\u0275inj=o.Lb({factory:function(e){return new(e||y)},imports:[[i.e.forChild(k)],i.e]}),y),I=a("wKbA"),U=a("otUU"),F=((S=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:S}),S.\u0275inj=o.Lb({factory:function(e){return new(e||S)},providers:[b],imports:[[s.c,E,U.a,I.a]]}),S)}}]);