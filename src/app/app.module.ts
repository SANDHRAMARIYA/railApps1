import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllRailsComponent } from './view-all-rails/view-all-rails.component';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
