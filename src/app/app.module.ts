import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { AppRoutingModule } from './/app-routing.module';
import { ButtonListService} from './services/button-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test01Component,
    Test02Component
  ],
  imports: [
    BrowserModule, CommonModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    // HttpClient,
    ButtonListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
