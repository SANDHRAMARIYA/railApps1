import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllRailsComponent } from './view-all-rails/view-all-rails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {
    path:"",component:ViewAllRailsComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    ViewAllRailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
