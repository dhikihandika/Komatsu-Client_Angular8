/*
Aothuor : dhkihandika
Date    : 22/10/2019
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Ireports } from './report';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  //Base URL
  baseurl = 'http://monitor.parametrik.co.id:8080';
  constructor(private http: HttpClient) { }

  //Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': '*',
      'Content-Type':'application/json'
    })
  }

  //Http GET Request
  Getdata(): Observable<Ireports[]>{
    return this.http.get<Ireports[]>(this.baseurl+ '/get/resultdata')
    .pipe(
      retry(1),
      catchError(this.errorHandle)
    )
  }
    
  //Error Handle
  errorHandle(error){
    let errorMessage="";
    if(error.error instanceof ErrorEvent){
      //Get cllient-side error
      errorMessage = error.error.message;
    }else{
      //Get server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

