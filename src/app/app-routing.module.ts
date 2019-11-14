// Import library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutasComponent } from './aboutas/aboutas.component';

// Make routes component
const routes: Routes = [
  {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},         //default route can't fill sapace
  {path:'dashboard', component: DashboardComponent},
  {path:'report', component: ReportComponent},
  {path:'notification', component: NotificationComponent},
  {path:'aboutas', component: AboutasComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
