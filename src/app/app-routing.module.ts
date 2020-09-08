import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path : 'users',
    children: [
      {
        path : '',
        component : UserComponent
      },
      {
        path : 'add',
        component : AddUserComponent
      },
      {
        path : ':id/edit',
        component: EditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
