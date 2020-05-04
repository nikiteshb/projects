import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    SharedModule,
    UsersModule,
    HttpClientModule
  ],
  exports:[
    SharedModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
