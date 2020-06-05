import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { FontsizecolorStyleComponent } from './practice/fontsizecolor-style/fontsizecolor-style.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'font-practice' },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'list-user', component: ListUserComponent } ,
  { path: 'font-practice', component: FontsizecolorStyleComponent }
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
