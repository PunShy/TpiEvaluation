import {
  Component, OnInit, OnChanges, Input, ViewChild, ElementRef, AfterViewChecked, AfterViewInit,
  AfterContentInit, AfterContentChecked, OnDestroy, DoCheck, Output, EventEmitter, SimpleChanges
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IEventInfo, ITown } from '../editor-map/editor-map.component';
import { NgForm } from '@angular/forms';


export function myInlineMatcherFn(fromState: string, toState: string, element: HTMLElement,
  params: { [key: string]: any }): boolean {

  if (fromState === 'void' || toState === 'void') {
    return false;
  }
  return true;
  // // angular material BUG 修正， 新package已更正
  // if (fromState === 'collapsed' && toState === 'void') {
  //   element.classList.add('height-zero');
  //   return false;
  // } else {
  //   element.classList.remove('height-zero');
  //   return true;
  // }
}

@Component({
  selector: 'app-events-in-task',
  templateUrl: './events-in-task.component.html',
  styleUrls: ['./events-in-task.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0px' })),
      state('void', style({ height: '0px', minHeight: '0px' })),
      state('expanded', style({ height: '*' })),
      // transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition(myInlineMatcherFn, animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventsInTaskComponent implements OnInit, OnChanges {

  // @ViewChild('tProtlet', { static: true }) protlet: ElementRef;
  @Input()
  dataTitle: IEventInfo;
  @Input()
  dataSource: IEventInfo[];
  @Input()
  expandedElement: any | null = null;
  @Input()
  squad: number;

  @Input()
  towns: ITown[];

  @Output()
  delete = new EventEmitter<IEventInfo>();

  @Output()
  goSubmit = new EventEmitter<IEventInfo>();



  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = ['year', 'townText', 'roadName', 'roadLength', 'delete'];

  isimgUploadOpen = false;

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.dataSource) { return; }
    this.changeTownText();
  }

  changeTownText() {
    this.dataSource.forEach(item => {
      const temp = this.towns.filter(town1 => {
        return item.town === town1.Id;
      })[0];
      if (!!temp) {
        item.townText = temp.TownText;
      } else {
        item.townText = item.town;
      }
    })
  }

  closeDatepicker(date, element: IEventInfo) {
    element.year = moment(date.value).format('YYYY/MM/DD');
  }

  switchOpen(eve: MouseEvent, element) {
    eve.stopPropagation();
    this.expandedElement = this.expandedElement === element ? null : element
  }

  runDelete(val: IEventInfo) {
    this.delete.emit(val);
  }
  onSubmit(form: NgForm, val: IEventInfo) {
    if (form.invalid) return;
    this.goSubmit.emit(val);
  }

}
