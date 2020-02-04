import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { UserRoutingModule } from '../../routing/user-routing.module';
import { UserViewComponent } from './components/user-view/user-view.component';
import { DataContainerComponent } from './components/data-container/data-container.component';
import { PassportContainerComponent } from './components/user-view/passport-container/passport-container.component';
import { UserViewItemComponent } from './components/user-view/user-view-item/user-view-item.component';
import { PersonalInfoContainerComponent } from './components/user-view/personal-info-container/personal-info-container.component';
import { OtherInfoContainerComponent } from './components/user-view/other-info-container/other-info-container.component';
import { UserEditNewComponent } from './components/user-edit-new/user-edit-new.component';
import { UserEditItemComponent } from './components/user-edit-new/user-edit-item/user-edit-item.component';
import {FormsModule} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {UserRepository} from "../../repository/user.repository";
import {UserResource} from "../../web/rest/user.resource";

@NgModule({
  declarations: [
    UserListComponent,
    UserLayoutComponent,
    UserViewComponent,
    DataContainerComponent,
    PassportContainerComponent,
    UserViewItemComponent,
    PersonalInfoContainerComponent,
    OtherInfoContainerComponent,
    UserEditNewComponent,
    UserEditItemComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [
    UserService,
    UserRepository,
    UserResource
  ]
})
export class UserModule { }
