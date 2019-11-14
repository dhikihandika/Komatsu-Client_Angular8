/*
Aothuor : dhkihandika
Date    : 05/11/2019
*/

import { Component, OnInit } from '@angular/core';                                                      // API Component and OnInit from angular/core
import { ReportServiceService } from '../services/report-service/report-service.service';               // Use module export ReportServiceService 
import { DomSanitizer } from '@angular/platform-browser';                                               // API DomSanitizer from @angular/platform-browser
import { HttpClient } from '@angular/common/http';                                                      // API HttpClient from @angular/common/http
import { Observable, of } from 'rxjs';                                                                  // API Observable from library rxjs
import { catchError} from 'rxjs/operators'                                                              // API catchError from rxjs/operator
/* =================================================================== /*
   API ==> detail is Angular package, interface, class and other type
/* =================================================================== */

// Decorator that marks a class as an Angular component and provides configuration metadata
@Component({
  selector: 'app-report',                                                                               // The name element of component if call in another componenet
  templateUrl: './report.component.html',                                                               // The relative path or absolute URL of a template file for an Angular component
  styleUrls: ['./report.component.css']                                                                 // One or more relative paths or absolute URLs for files containing CSS stylesheets to use in this component.
})

// Create own module class ReportComponent
/* Use the exports keyword to make properties and methods available outside the module file */
export class ReportComponent implements OnInit {

  // Expansion element mode 
  step = 0;                                                                                             // declare step with value 0 'boolean'
  setStep(index: number) {                                                                              // function setStep (index from html element is number)
    this.step = index;                                                                                  // set the strp is index
  }
  // declare property binding ExpansionImage1 until ExpasionImage10 with value boolean
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
    

  // construct some alias/instance name of DomSanitizer, HttpClient and ReportServiceService class
  /* constructor its feature from Typescript */
  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private mainService: ReportServiceService) { }

  // Initialize work and logic of the component
  // ngOnInit called after constructor is executed
  ngOnInit() {
    // define some method to susbcribe data 
    this.LoadReports();                                                                               
    this.GetImageData();                                                                            
    this.CheckboxDescription();
  }

  // ==================================================================================================== //
  // ======== Get data list ============================================================================= //
  // ==================================================================================================== //
  // declare property binding 'dataList'
  dataList: any = [];
   // LoadReports method
   LoadReports(){
    return this.mainService.Getdata().subscribe((data:{})=>{                                            // return data from service and subscribe to data
      this.dataList=data;                                                                               // data subscribe now same dataList
    })
  }

  // ==================================================================================================== //
  // ======== Get data image ============================================================================ //
  // ==================================================================================================== //
  // declare property binding 'image1 until image10'
  image1;image2;image3;image4;image5;image6;image7;image8;image9;image10; 
  kkk;
  // GetImageData method                          
  GetImageData() {
    this.http.get<any>("http://monitor.parametrik.co.id:8080/get/resultdataimage")                      // http.get request data from (url already define)
    .subscribe((data => {                                                                               // susbcribe data from http.get request to data
      // define STRING_CHAR 
      /* 
        Its a String data from proccess; 
        - parsing data arraybuffer json : (data[0].result_image.data)
        - convertion to typearray 'Unit8array': new Uint8Array()
        - reduce data method for each value of the array: .reduce()
        - return data and String.fromCharCode(byte) 
        - encodes a string in base-64: btoa()
      */
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

      //binding value 
      //property binding 'image1' same as method DomSanitizer
      /*
        Bypass security and trust the given value to be a safe resource URL,
        a location that may be used to load executable code from, like <script src>, or <img src>.
      */
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
        // Error handel
        catchError(this.handleError('details', []))                                                     // When occur error catch to handleError method
      ); 
  }

  // ==================================================================================================== //
  // ======== Get data checkbox description ============================================================= //
  // ==================================================================================================== //
  // property binding array data checkbox
  arraycheckbox1: any=[];arraycheckbox2: any=[];arraycheckbox3: any=[];arraycheckbox4: any=[];arraycheckbox5: any=[];
  arraycheckbox6: any=[];arraycheckbox7: any=[];arraycheckbox8: any=[];arraycheckbox9: any=[];arraycheckbox10: any=[];
  // property binding checkbox
  checkbox1: any=[];checkbox2: any=[];checkbox3: any=[];checkbox4: any=[];checkbox5: any=[];
  checkbox6: any=[];checkbox7: any=[];checkbox8: any=[];checkbox9: any=[];checkbox10: any=[];
  // method CheckboxDescription()
  CheckboxDescription(){
    return this.mainService.Getdata().subscribe(data =>{                                                // return data from service and subscribe to data
      // Get checkbox data and convert to binary
      for(let a = 0; a<=7; a++){                                                                        // condition structure a 
        var data1 =(data[0].result_checkbox)                                                            // function parsing data chechbox (data[0].result_checkbox)
        var operation = (data1 & Math.pow(2,a))                                                         // operation logic AND with value 2^a
        var convertion = operation.toString(2)                                                          // convertion number data operation to string(base 2)/same as binary data
        this.checkbox1.push(convertion)                                                                 // push data convertion to property binding 'checkbox'
        //---- Simple program get checkbox data and convert to binary proccess -------//
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
      for(let i =0; i<=7; i++){                                                                         // condition structure for i
        // condition structure if (property binding checkbox[i] not equal zero), execute;
        if(this.checkbox1[i] != 0 ){                                                                    // conditionn struucture if (condition)                   
          let t = [1, 2, 3, 4, 5, 6, 7, 8]                                                              // defiine variable t is array data [1, 2, 3, 4, 5, 6, 7, 8] 
          this.arraycheckbox1.push(" var "+t[i])                                                        // push ("var" + t[i]) too property binding arraycheckbox
          // ----------------------- proccess has same until checkbox 10 
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