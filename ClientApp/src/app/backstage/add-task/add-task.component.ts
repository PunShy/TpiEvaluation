import { Component, OnInit, AfterViewInit } from '@angular/core';
import { KtTool } from 'src/app/common/kt-tool';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, AfterViewInit {

  isModifyState = false;
  canModify = true;

  constructor() { }

  ngOnInit(): void {
    // debugger;
    // KtTool.datepickerInit('#kt_datepicker_2',
    // {
    //   rtl: KTUtil.isRTL(),
    //   todayHighlight: true,
    //   orientation: 'bottom left',
    //   templates: {
    //     leftArrow: '<i class="la la-angle-left"></i>',
    //     rightArrow: '<i class="la la-angle-right"></i>'
    //   }
    // });

  }

  ngAfterViewInit(): void {


  }


}
