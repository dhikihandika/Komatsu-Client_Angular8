/* 
Author :  dhikihandika
Date   :  21-10-2019
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  panelLineOpenState = false;
  panelBarOpenState  = false;

  constructor() { }
  ngOnInit() {

  }
}