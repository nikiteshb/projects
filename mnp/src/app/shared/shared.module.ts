import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from 'ngx-bootstrap/collapse/';
import { ModalModule } from 'ngx-bootstrap/modal/';
import { TooltipModule } from 'ngx-bootstrap/tooltip/';
import { PopoverModule } from 'ngx-bootstrap/popover/';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
