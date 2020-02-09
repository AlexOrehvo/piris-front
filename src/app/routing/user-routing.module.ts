import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserLayoutComponent} from '../view/user/components/user-layout/user-layout.component';
import {UserListComponent} from '../view/user/components/user-list/user-list.component';
import {UserViewComponent} from "../view/user/components/user-view/user-view.component";
import {UserEditNewComponent} from "../view/user/components/user-edit-new/user-edit-new.component";

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'view/:id',
        component: UserViewComponent
      },
      {
        path: 'new',
        component: UserEditNewComponent
      },
      {
        path: 'edit/:id',
        component: UserEditNewComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
