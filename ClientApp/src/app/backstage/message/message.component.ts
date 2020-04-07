import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  data: { title: string, message?: string ,success?: string, error?: string };
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data1: { title: string, message?: string ,success?: string, error?: string }) {

    this.data = data1;
   }

  ngOnInit(): void {
  }

}
