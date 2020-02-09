import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankLayoutComponent } from './components/bank-layout/bank-layout.component';
import {BankRoutingModule} from '../../routing/bank-routing.module';
import {MainModule} from '../main/main.module';
import { DepositListComponent } from './components/deposit-list/deposit-list.component';
import { DevelopmentFundListComponent } from './components/development-fund-list/development-fund-list.component';
import { CustomerAccountListComponent } from './components/customer-account-list/customer-account-list.component';
import { DepositEditNewComponent } from './components/deposit-edit-new/deposit-edit-new.component';
import {FormsModule} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {UserModule} from "../user/user.module";
import { CustomerAccountItemComponent } from './components/customer-account-list/customer-account-item/customer-account-item.component';

@NgModule({
  declarations: [
    BankLayoutComponent,
    DepositListComponent,
    DevelopmentFundListComponent,
    CustomerAccountListComponent,
    DepositEditNewComponent,
    CustomerAccountItemComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    MainModule,
    FormsModule,
    UserModule
  ],
  exports: [
  ]
})
export class BankModule { }
