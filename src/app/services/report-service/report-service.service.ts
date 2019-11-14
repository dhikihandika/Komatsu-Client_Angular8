/*
Aothuor : dhkihandika
Date    : 22/10/2019
*/

import { Injectable } from '@angular/core';                                                 // API of decorator metadata              
import { HttpClient, HttpHeaders } from '@angular/common/http';                             // API HttpClient and HttpHeaders
import { Observable, throwError } from 'rxjs';                                              // API Observable and throwError from rxjs library
import { retry, catchError } from 'rxjs/operators';                                         // API retry and catchError from rxjs library
import { Ireports } from './report';                                                        // API Interface from module Ireports
/* =================================================================== /*
   API ==> detail is Angular package, interface, class and other type
/* =================================================================== */

@Injectable({
  providedIn: 'root'                                                                        // Provide the injectable in 'root' ===> use in most application
})

// Create own module class ReportServiceService
/* Use the exports keyword to make properties and methods available outside the module file */
export class ReportServiceService {                                                         
  //Base URL
  baseurl = 'http://monitor.parametrik.co.id:8080';                                         // Define variable 'baseurl' to Access point URL/API from server
  constructor(private http: HttpClient) { }                                                 // Construct http as instance of class HttpClient

  //Header configuration options for an HTTP request
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',                               // Origin HTTP Request
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',                                // Methode HTTP Request
      'Access-Control-Allow-Headers': '*',                                                  // Header response is '*' (wildcard) value
      'Content-Type':'application/json'                                                     // Entity header is used to indicate the media type of the resource.
    })
  }

  //Http GET Request
  Getdata(): Observable<Ireports[]>{                                                        // Getdata() function use to passing messages between publishers and subscribers in anyscronous manner
    return this.http.get<Ireports[]>(this.baseurl+ '/get/resultdata')                       // Return as HTTP.get data from baseurr + /get/resultdata
    .pipe(                                                                                  // A pipe takes in data as input and transforms it to a desired output.
      retry(1),                                                                             // Function to resusbcribe when source of Observable calls error
      catchError(this.errorHandle)                                                          // When error catchError to method errorHandlle()
    )
  }
    
  //Error Handle Method
  errorHandle(error){
    let errorMessage="";                                                                    // Define variable errorMessage
    if(error.error instanceof ErrorEvent){                                                  // if error.error alias of ErrorEvent
      /*Events providing information related to errors in scripts or in files.*/
      //Get client-side error
      errorMessage = error.error.message;                                                   // errorMessage from client side
    }else{
      //Get server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;             // erorMessage is status and message error from server side
    }
    console.log(errorMessage);                                                              // show on console errorMessage
    return throwError(errorMessage);                                                        // return errorMesage to throwError
  }
}

