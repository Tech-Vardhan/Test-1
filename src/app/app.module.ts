import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule,NgForm} from '@angular/forms';
import { BrowserModule, } from '@angular/platform-browser';

import {  RouterModule,Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RactiveComponent } from './ractive/ractive.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RactiveComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
