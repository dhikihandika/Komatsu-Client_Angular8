// Import library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutasComponent } from './aboutas/aboutas.component';
import { LoadingimageComponent } from './tryprogram/loadingimage/loadingimage.component'

// Make routes component
const routes: Routes = [
  {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},         //default route
  {path:'dashboard', component: DashboardComponent},
  {path:'report', component: ReportComponent},
  {path:'notification', component: NotificationComponent},
  {path:'aboutas', component: AboutasComponent},
  {path:'loadimage', component: LoadingimageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
