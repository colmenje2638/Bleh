import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent,
  },
  {
    path: 'Contact', component: ContactComponent,
  },
  {
    path: 'App', component: AppComponent,
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
