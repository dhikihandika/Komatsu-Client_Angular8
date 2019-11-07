/*
Aothuor : dhkihandika
Date    : 24/10/2019
*/

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { ReportServiceService } from '../../services/report-service/report-service.service';

@Component({
  selector: 'app-loadingimage',
  templateUrl: './loadingimage.component.html',
  styleUrls: ['./loadingimage.component.css']
})
export class LoadingimageComponent implements OnInit {
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  ExpansionImage1 = false;
  ExpansionImage2 = false;
  ExpansionImage3 = false;

  dataList: any = [];
  datacheckbox: Array<any>=[];

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private mainService: ReportServiceService) { }
  ngOnInit() {
    this.loadReports();
    this.loadReportscheckbox();
    this.GetImageData();
  }

  // Get data list
   loadReports(){
    return this.mainService.Getdata().subscribe((data:{})=>{
      this.dataList=data;
      console.log(this.dataList)
    })
  }
  
  // Load Reports Present
  // Define variable 
  checkbox1: any=[];
  checkbox2: any=[];
  checkbox3: any=[];
  checkbox4: any=[];
  checkbox5: any=[];
  checkbox6: any=[];
  checkbox7: any=[];
  checkbox8: any=[];
  checkbox9: any=[];
  checkbox10: any=[];

   // Data in check
   arraycheckbox1: any=[];
   arraycheckbox2: any=[];
   arraycheckbox3: any=[];
   arraycheckbox4: any=[];
   arraycheckbox5: any=[];
   arraycheckbox6: any=[];
   arraycheckbox7: any=[];
   arraycheckbox8: any=[];
   arraycheckbox9: any=[];
   arraycheckbox10: any=[];
  loadReportscheckbox(){
    return this.mainService.Getdata().subscribe((data =>{
      // retrive data from server
      for(let a = 0; a<=7; a++){
        var data1 =(data[0].result_checkbox)
        var operation = (data1 & Math.pow(2,a))
        var convertion = operation.toString(2)
        this.checkbox1.push(convertion)
        //-----------------------------------
        this.checkbox2.push(((data[1].result_checkbox) & Math.pow(2,a)).toString(2))  
        this.checkbox3.push(((data[2].result_checkbox) & Math.pow(2,a)).toString(2))
        this.checkbox4.push(((data[3].result_checkbox) & Math.pow(2,a)).toString(2))
        this.checkbox5.push(((data[4].result_checkbox) & Math.pow(2,a)).toString(2))    
        this.checkbox6.push(((data[5].result_checkbox) & Math.pow(2,a)).toString(2))
        this.checkbox7.push(((data[6].result_checkbox) & Math.pow(2,a)).toString(2))  
        this.checkbox8.push(((data[7].result_checkbox) & Math.pow(2,a)).toString(2))       
        this.checkbox9.push(((data[8].result_checkbox) & Math.pow(2,a)).toString(2))             
        this.checkbox10.push(((data[9].result_checkbox) & Math.pow(2,a)).toString(2))
      console.log(this.checkbox1)
      console.log(this.checkbox2)
      }
      for(let i =0; i<=7; i++){
        if(this.checkbox1[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox1.push(" var "+t[i])
        }
        if(this.checkbox2[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox2.push("var "+t[i])
        }
        if(this.checkbox3[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox3.push("var "+t[i])
        }

      }
    }))
  }


  image1;
  image2;
  image3;
  GetImageData() {
    this.http.get<any>("http://localhost:8080/get/resultdataimage")
    .subscribe((data => { 
      var STRING_CHAR1 = btoa(new Uint8Array(data[0].result_image.data).reduce(function (data, byte1) {
        return data + String.fromCharCode(byte1)
      },''))
      var STRING_CHAR2 = btoa(new Uint8Array(data[1].result_image.data).reduce(function (data, byte2) {
      return data + String.fromCharCode(byte2);
      }, ''))
      var STRING_CHAR3 = btoa(new Uint8Array(data[1].result_image.data).reduce(function (data, byte3) {
      return data + String.fromCharCode(byte3);
      }, ''))

      //bind value
      this.image1 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR1);
      this.image2 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR2);
      this.image3 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR3);
 
      }),
        catchError(this.handleError('details', []))     // Error Handle
      ); 
  }
  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}






  // loadReportscheckbox(){
  //   return this.mainService.Getdata().subscribe((data =>{
  //     check1= (data[0].result_checkbox);
  //     console.log("bnaryData1: " + check1);
  //     let arraydata=[];
  //     for(let a = 0; a<=7; a++){
  //       ba = check1 & Math.pow(2, a)
  //       arraydata.push(ba)
  //     }
  //     // arraydata.push((check1 & 1).toString(2))
  //     // arraydata.push((check1 & 2).toString(2))
  //     // arraydata.push((check1 & 4).toString(2))
  //     // arraydata.push((check1 & 8).toString(2))
  //     // arraydata.push((check1 & 16).toString(2))
  //     // arraydata.push((check1 & 32).toString(2))
  //     // arraydata.push((check1 & 64).toString(2))
  //     // arraydata.push((check1 & 128).toString(2))
  //     console.log("resultData: " + arraydata)
  //     for(let i =0; i<=7; i++){
  //       let checkbox: Array<any>= [];
  //       if(arraydata[i] != 0 ){
  //         let t = [1, 2, 3, 4, 5, 6, 7, 8]
  //         checkbox.push(""+t[i])
  //         this.dataCheckbox.push(checkbox)
  //         console.log(this.dataCheckbox);
  //       }
  //     }
  //   }))
  // }
