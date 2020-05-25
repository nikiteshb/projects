import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { RefrenceComponent } from './refrence/refrence.component';

const routes: Routes = [
  { path: "", redirectTo: "refrence", pathMatch: "full" },
  { path: "home", component: HomepageComponent },
  { path: "refrence", component: RefrenceComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ]
})
export class AppRoutingModule { }
