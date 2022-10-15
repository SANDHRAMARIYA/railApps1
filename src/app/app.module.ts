import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllRailsComponent } from './view-all-rails/view-all-rails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdddataComponent } from './adddata/adddata.component';
const appRoutes:Routes=[
  {
    path:"",component:ViewAllRailsComponent
  },{
    path:"add",component:AdddataComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    ViewAllRailsComponent,
    AdddataComponent
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
