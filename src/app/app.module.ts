import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms' ;

import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoutemodModule } from './routemod/routemod.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycomponentsModule } from './mycomponents/mycomponents.module';
import { NotetakerComponent } from './notetaker/notetaker.component';
import { NotegridviewComponent } from './notegridview/notegridview.component';
import { NotelistviewComponent } from './notelistview/notelistview.component';
import { MynoteComponent } from './mynote/mynote.component';
import { EditnoteviewComponent } from './editnoteview/editnoteview.component';
import { EditnoteopenerComponent } from './editnoteopener/editnoteopener.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    NotetakerComponent,
    NotegridviewComponent,
    NotelistviewComponent,
    MynoteComponent,
    EditnoteviewComponent,
    EditnoteopenerComponent
  ],
  imports: [
   BrowserModule,
   HttpClientModule,
   ReactiveFormsModule,
   RoutemodModule,
   MatToolbarModule,
   MatExpansionModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   FormsModule,
   MatCardModule,
   BrowserAnimationsModule,
   MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EditnoteviewComponent]
})
export class AppModule { }
