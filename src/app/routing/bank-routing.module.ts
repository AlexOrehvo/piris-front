import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BankLayoutComponent} from '../view/bank/components/bank-layout/bank-layout.component';
import {DepositListComponent} from '../view/bank/components/deposit-list/deposit-list.component';
import {CustomerAccountListComponent} from '../view/bank/components/customer-account-list/customer-account-list.component';
import {DevelopmentFundListComponent} from '../view/bank/components/development-fund-list/development-fund-list.component';
import {DepositEditNewComponent} from '../view/bank/components/deposit-edit-new/deposit-edit-new.component';

const routes: Routes = [
  {
    path: '',
    component: BankLayoutComponent
  },
  {
    path: 'deposits',
    component: DepositListComponent
  },
  {
    path: 'customer-accounts',
    component: CustomerAccountListComponent
  },
  {
    path: 'development-funds',
    component: DevelopmentFundListComponent
  },
  {
    path: 'create-deposit/:id',
    component: DepositEditNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
