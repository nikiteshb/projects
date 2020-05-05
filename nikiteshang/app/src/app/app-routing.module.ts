import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomepageComponent },
  { path: 'home/#/home', component: HomepageComponent },
  // { path: 'add-user', component: AddUserComponent },
  // { path: 'edit-user/:id', component: EditUserComponent },
  // { path: 'list-user', component: ListUserComponent },
  { path: '**', redirectTo: '/404' },
  {path: '404', component: NotfoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
