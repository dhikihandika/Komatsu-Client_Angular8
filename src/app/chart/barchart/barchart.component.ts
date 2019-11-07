/*
Author: dhikihandika
Date Created: 30/10/2019
*/

import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service/report-service.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
 ChartBarData: any;
 Presentase: number[]=[];
 Checkbox: number[]=[];
 TimeOperator: any[]=[];

  ngOnInit() {
    this.loadData();
  }
  constructor(
    public mainService: ReportServiceService,
  ) { }

    // Get data
 loadData(){
   return this,this.mainService.Getdata().subscribe(data => {
     for(let i = 0; i<data.length; i++){
       this.Presentase.push(data[i].result_presentase)
       this.Checkbox.push(data[i].result_checkbox)
       this.TimeOperator.push("Time: "+data[i].createdAt + "\nOperator: "+data[i].nama_op)
     }

     // Plot data to chart
     Chart.defaults.global.responsive = true;
     this.ChartBarData = new Chart ('canvas', {
      type: 'bar',
          data: {
              labels: this.TimeOperator,
              datasets: [{
                  label: 'Checkbox',
                  data: this.Presentase,
                  borderWidth: 3,
                  borderColor: 'rgba(255, 99, 132, 1)',
                  backgroundColor: 'rgba(255, 99, 132, 0.4)',
                  fill: true,
              },
                        {
                  label: 'Presentase',
                  data: this.Checkbox,
                  borderWidth: 3,
                  borderColor: 'rgba(54, 162, 235, 1)',
                  backgroundColor: 'rgba(54, 162, 235, 0.4)',
                  fill: true
              }
            ]
          },
          options: {
              tooltips: {
                enabled: true,
                mode: "index"
              },
              scales: {
                  yAxes: [{
                      display: true
                  }],
                  xAxes: [{
                    display: false
                }]
              }
          }
      })
    })
 }
}


// return this.mainService.Getdata().subscribe((data => {
//   for(var i = 0; i < data.length; i++){
//     this.dataId.push(data[i].id)
//     this.dataResultCheckbox.push(data[i].result_checkbox)
//     this.dataResultPresentase.push(data[i].result_presentase)
//   }
// }))

 // dataId: number[] = [];
  // dataResultCheckbox: number[] = [];
  // dataResultPresentase: number[] = [];

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  // public barChartLabels = this.dataId
  // public barChartType = 'bar';
  // public barChartLegend = true;

  // public barChartData = [
  //   {data: this.dataResultCheckbox, label: 'Checkbox'},
  //   {data: this.dataResultPresentase, label: 'Presentase'}

  // ];
