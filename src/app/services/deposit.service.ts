import { Injectable } from '@angular/core';
import {Deposit} from '../domain/deposit';
import {DepositResource} from '../web/rest/deposit.resource';
import {Observable} from 'rxjs';
import {BankAccount} from '../domain/bank-account';
import {ActivePassiveAccount} from '../domain/active-passive-account';
import {DevelopmentFund} from '../domain/development-fund';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private deposits: Array<Deposit> = [];

  constructor(
    private depositResource: DepositResource
  ) {
    this.depositResource.getDeposits()
      .subscribe(data => this.deposits = data);
  }

  public getDepositById(id: number): Deposit {
    return this.deposits.find(item => item.id === id);
  }

  public getDeposits(): Array<Deposit> {
    return this.deposits;
  }

  public save(bankAccount: BankAccount): Observable<BankAccount> {
    return this.depositResource.save(bankAccount);
  }

  public getCustomerAccounts(): Observable<Array<ActivePassiveAccount>> {
    return this.depositResource.getCustomerAccount();
  }

  public revokeCustomerAccount(customerAccount: ActivePassiveAccount): Observable<ActivePassiveAccount> {
    return this.depositResource.revokeCustomerAccount(customerAccount);
  }

  public closeDay(): Observable<any> {
    return this.depositResource.closeDay();
  }

  public getDevelopmentFunds(): Observable<Array<DevelopmentFund>> {
    return this.depositResource.getDevelopmentFunds();
  }
}
