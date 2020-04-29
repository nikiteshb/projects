import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomepageComponent,
  ]
})
export class HomeModule { }
