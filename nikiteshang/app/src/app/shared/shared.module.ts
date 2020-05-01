import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ContactformComponent } from './contactform/contactform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    ContactformComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContactformComponent
  ]
})
export class SharedModule { }
