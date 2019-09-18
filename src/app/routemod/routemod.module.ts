import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyactivateGuard } from '../myactivate.guard';
import { NotegridviewComponent } from '../notegridview/notegridview.component';
import { NotelistviewComponent } from '../notelistview/notelistview.component';
import { EditnoteopenerComponent } from '../editnoteopener/editnoteopener.component';

const rout : Routes =  
[
 {
   path:'login',
   component:LoginComponent
 },
 {
   path:'dashboard',
   component:DashboardComponent,
   canActivate:[MyactivateGuard],
   children :
   [
     {
     path:'view/grid',
     component:NotegridviewComponent
     },
     {
       path:'view/list',
        component:NotelistviewComponent
     },
     {
       path:'',
       redirectTo:'view/grid',
       pathMatch:'full'
     },
     {
       path:'note/:mynoteid/edit',
       component:EditnoteopenerComponent,
       outlet:'OutletEdit'
     }
   ]
 },
 {
   path:'',
   redirectTo:'login',
   pathMatch:'full'
 }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rout)
  ],
  exports :
  [RouterModule]
})
export class RoutemodModule { }
