/*
Aothuor : dhkihandika
Date    : 05/11/2019
*/

import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from '../services/report-service/report-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  ExpansionImage1 = false;
  ExpansionImage2 = false;
  ExpansionImage3 = false;
  ExpansionImage4 = false;
  ExpansionImage5 = false;
  ExpansionImage6 = false;
  ExpansionImage7 = false;
  ExpansionImage8 = false;
  ExpansionImage9 = false;
  ExpansionImage10 = false;
    

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private mainService: ReportServiceService) { }
  ngOnInit() {
    this.LoadReports();
    this.GetImageData();
    this.CheckboxDescription();
  }

  // ==================================================================================================== //
  // ======== Get data list ============================================================================= //
  // ==================================================================================================== //
  // Define varible 
  dataList: any = [];
   LoadReports(){
    return this.mainService.Getdata().subscribe((data:{})=>{
      this.dataList=data;
    })
  }

  // ==================================================================================================== //
  // ======== Get data image ============================================================================ //
  // ==================================================================================================== //
  image1;image2;image3;image4;image5;image6;image7;image8;image9;image10;
  GetImageData() {
    this.http.get<any>("http://localhost:8080/get/resultdataimage")
    .subscribe((data => { 
      var STRING_CHAR1 = btoa(new Uint8Array(data[0].result_image.data).reduce(function (data, byte1) {
        return data + String.fromCharCode(byte1)
      },''))
      var STRING_CHAR2 = btoa(new Uint8Array(data[1].result_image.data).reduce(function (data, byte2) {
      return data + String.fromCharCode(byte2);
      }, ''))
      var STRING_CHAR3 = btoa(new Uint8Array(data[2].result_image.data).reduce(function (data, byte3) {
      return data + String.fromCharCode(byte3);
      }, ''))
      var STRING_CHAR4 = btoa(new Uint8Array(data[3].result_image.data).reduce(function (data, byte4) {
        return data + String.fromCharCode(byte4)
      },''))
      var STRING_CHAR5 = btoa(new Uint8Array(data[4].result_image.data).reduce(function (data, byte5) {
      return data + String.fromCharCode(byte5);
      }, ''))
      var STRING_CHAR6 = btoa(new Uint8Array(data[5].result_image.data).reduce(function (data, byte6) {
      return data + String.fromCharCode(byte6);
      }, ''))
      var STRING_CHAR7 = btoa(new Uint8Array(data[6].result_image.data).reduce(function (data, byte7) {
        return data + String.fromCharCode(byte7)
      },''))
      var STRING_CHAR8 = btoa(new Uint8Array(data[7].result_image.data).reduce(function (data, byte8) {
      return data + String.fromCharCode(byte8);
      }, ''))
      var STRING_CHAR9 = btoa(new Uint8Array(data[8].result_image.data).reduce(function (data, byte9) {
      return data + String.fromCharCode(byte9);
      }, ''))
      var STRING_CHAR10 = btoa(new Uint8Array(data[9].result_image.data).reduce(function (data, byte10) {
        return data + String.fromCharCode(byte10)
      },''))

      //bind value
      this.image1 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR1);
      this.image2 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR2);
      this.image3 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR3);
      this.image4 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR4);
      this.image5 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR5);
      this.image6 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR6);
      this.image7 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR7);
      this.image8 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR8);
      this.image9 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR9);
      this.image10 = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + STRING_CHAR10);
      }),
        catchError(this.handleError('details', []))     // Error Handle
      ); 
  }

  // ==================================================================================================== //
  // ======== Get data checkbox description ============================================================= //
  // ==================================================================================================== //
  // variable data
  checkbox1: any=[];checkbox2: any=[];checkbox3: any=[];checkbox4: any=[];checkbox5: any=[];
  checkbox6: any=[];checkbox7: any=[];checkbox8: any=[];checkbox9: any=[];checkbox10: any=[];
  // variable array data
  arraycheckbox1: any=[];arraycheckbox2: any=[];arraycheckbox3: any=[];arraycheckbox4: any=[];arraycheckbox5: any=[];
  arraycheckbox6: any=[];arraycheckbox7: any=[];arraycheckbox8: any=[];arraycheckbox9: any=[];arraycheckbox10: any=[];
  CheckboxDescription(){
    return this.mainService.Getdata().subscribe(data =>{
      // Get checkbox data and convert to binary
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
      }

      // Define variable string from data binary
      for(let i =0; i<=7; i++){
        if(this.checkbox1[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox1.push(" var "+t[i])
        } if(this.checkbox2[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox2.push(" var "+t[i])
        } if(this.checkbox2=3[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox3.push(" var "+t[i])
        } if(this.checkbox4[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox4.push(" var "+t[i])
        } if(this.checkbox5[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox5.push(" var "+t[i])
        } if(this.checkbox6[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox6.push(" var "+t[i])
        } if(this.checkbox7[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox7.push(" var "+t[i])
        } if(this.checkbox8[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox8.push(" var "+t[i])
        } if(this.checkbox9[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox9.push(" var "+t[i])
        } if(this.checkbox10[i] != 0 ){
          let t = [1, 2, 3, 4, 5, 6, 7, 8]
          this.arraycheckbox10.push(" var "+t[i])
        }

      }

    })
  }


  // ==================================================================================================== //
  // ======== Get data operator description ============================================================= //
  // ==================================================================================================== //




  // ==================================================================================================== //
  // ======== Get data model_type description =========================================================== //
  // ==================================================================================================== //
  
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