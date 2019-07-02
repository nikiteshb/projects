import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { WhatidoComponent } from './whatido/whatido.component';
import { DevicesiworkComponent } from './devicesiwork/devicesiwork.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { SoftwareiuseComponent } from './softwareiuse/softwareiuse.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';

@NgModule({
  declarations: [HeroComponent, WhatidoComponent, DevicesiworkComponent, MyskillsComponent, SoftwareiuseComponent, MyportfolioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    WhatidoComponent,
    DevicesiworkComponent,
    MyskillsComponent,
    SoftwareiuseComponent,
    MyportfolioComponent
 ]
})
export class HomepageModule { }
