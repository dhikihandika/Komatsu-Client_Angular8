import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import {ReportServiceService} from './services/report-service/report-service.service';
import {ChartsModule}  from 'ng2-charts'; 

// Import material modul
import {LayoutModule} from '@angular/cdk/layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 


// Import componenet 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutasComponent } from './aboutas/aboutas.component';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingimageComponent } from './tryprogram/loadingimage/loadingimage.component';
import { NotificationComponent } from './notification/notification.component';
import { LinechartComponent } from './chart/linechart/linechart.component';
import { BarchartComponent } from './chart/barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutasComponent,
    ReportComponent,
    LoadingimageComponent,
    NotificationComponent,
    LinechartComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ChartsModule
  ],
  providers: [
    ReportServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
