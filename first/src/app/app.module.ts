import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageModule } from './homepage/homepage.module';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { InstagramComponent } from './instagram/instagram.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    InstagramComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
