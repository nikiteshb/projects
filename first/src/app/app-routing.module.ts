import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramComponent } from './instagram/instagram.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'instagram', component: InstagramComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
