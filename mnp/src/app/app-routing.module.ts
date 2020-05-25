import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: "", redirectTo: "old_home", pathMatch: "full" },
  { path: "home", component: HomepageComponent },
  { path: "old_home", component: IndexComponent },
  { path: "old_profile", component: ProfilepageComponent },
  { path: "old_register", component: RegisterpageComponent },
  { path: "old_landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
