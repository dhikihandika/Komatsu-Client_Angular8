/* 
Author       : dhikihandika
Date Created : 30/10/2019
*/

import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service/report-service.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

export class LinechartComponent implements OnInit {
 ChartLineData: any;
 Presentase: number[]=[];
 Checkbox: number[]=[];
 TimeOperator: any[]=[];

  constructor(
      public mainService: ReportServiceService,
   ) { }

    ngOnInit() {
  this.loadData();
  }

  // Load data from server and push to varible
  loadData(){
    return this,this.mainService.Getdata().subscribe(data => {
      for(let i = 0; i<data.length; i++){
        this.Presentase.push(data[i].result_presentase)
        this.Checkbox.push(data[i].result_checkbox)
        this.TimeOperator.push("Time: "+data[i].createdAt + "\nOperator: "+data[i].nama_op)
      }

      // Plot data to chart
      Chart.defaults.global.responsive = true;
      this.ChartLineData = new Chart ('pallete', {
       type: 'line',
           data: {
               labels: this.TimeOperator,
               datasets: [
              {
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
                   fill: true,
               },
             ]
           },
           options: {
               tooltips: {
                    enabled: true,
                    mode:"index",
                    intersect: false
               },
               scales: {
                   yAxes: [{
                       display: true
                   }],
                   xAxes: [{
                      ticks: {
                      display: false //this will remove only the label
                  }
                 }]
               }
           }
       })
     })
  }
}




/* 
When need to use ng2-charts
*/

// export class LinechartComponent implements OnInit {
//   // Devclare array variable 
//   dataId: number[] = [];
//   dataResultCheckbox: number[] = [];
//   dataResultPresentase: number[] = [];

//   // Public line chart
//   public lineChartOptions = {
//     scaleShowVerticalLines: false,
//     responsive: true
//   };
//   public lineChartLabels = this.dataId;
//   public lineChartType = 'line';
//   public lineChartLegend = true;

//   public lineChartData = [
//     {data: this.dataResultCheckbox, label: 'Checkbox'},
//     {data: this.dataResultPresentase, label: 'Presentase'}

//   ];

//   ngOnInit() {
//     this.loadDataId();
//   }
//   constructor(
//     public mainService: ReportServiceService,
//   ) { }

//   // Load data and push to variable
//   loadDataId() {
//       return this.mainService.Getdata().subscribe((data => {
//         for(var i = 0; i < data.length; i++){
//           this.dataId.push(data[i].id)
//           this.dataResultCheckbox.push(data[i].result_checkbox)
//           this.dataResultPresentase.push(data[i].result_presentase)
//         }
//     }))
//   }
// }