import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'service',component: ServiceComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent,
    
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
