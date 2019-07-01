import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { WhatidoComponent } from './whatido/whatido.component';

@NgModule({
  declarations: [HeroComponent, WhatidoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    WhatidoComponent
 ]
})
export class HomepageModule { }
