import { Component, OnInit } from '@angular/core';
import {ActivePassiveAccount} from '../../../../domain/active-passive-account';
import {DepositService} from '../../../../services/deposit.service';
import {BankAccount} from '../../../../domain/bank-account';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-account-list',
  templateUrl: './customer-account-list.component.html',
  styleUrls: ['./customer-account-list.component.scss']
})
export class CustomerAccountListComponent implements OnInit {

  private customerAccount: Array<ActivePassiveAccount> = [];

  private bankAccounts: Array<BankAccount> = [];

  constructor(
    private depositService: DepositService,
    private location: Location
  ) {
    this.depositService.getCustomerAccounts()
      .subscribe(data => {
        this.customerAccount = data;
        data.forEach(item => {
          this.bankAccounts.push(item.active);
          this.bankAccounts.push(item.passive);
        });
      });
  }

  ngOnInit() {
  }

  revokeIsAvailable(account: BankAccount): boolean {
    if (this.isPassiveAccount(account.accountNumber)) {
      return false;
    } else {
      if (account.deposit.type === 'REVOCABLE') {
        return true;
      } else {
        return account.endDate <= new Date();
      }
    }
  }

  revoke(id: number): void {
    for (const account of this.customerAccount) {
      if (account.active.id === Number(id)) {
        this.depositService.revokeCustomerAccount(account)
          .subscribe(data => console.log('Account was revoked'));
      }
    }
  }

  private isPassiveAccount(accountNumber: string): boolean {
    return accountNumber.endsWith('0');
  }

  back(): void {
    this.location.back();
  }
}
