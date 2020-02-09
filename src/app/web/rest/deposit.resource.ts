import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Deposit} from '../../domain/deposit';
import {BankAccount} from '../../domain/bank-account';
import {ActivePassiveAccount} from '../../domain/active-passive-account';
import {DevelopmentFund} from "../../domain/development-fund";

@Injectable({
  providedIn: 'root'
})
export class DepositResource {

  constructor(
    private http: HttpClient
  ) { }

  public getDeposits(): Observable<Array<Deposit>> {
    return this.http.get<Array<Deposit>>('http://localhost:8081/bank/deposits');
  }

  public save(bankAccount: BankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>('http://localhost:8081/bank/deposits', bankAccount);
  }

  public getCustomerAccount(): Observable<Array<ActivePassiveAccount>> {
    return this.http.get<Array<ActivePassiveAccount>>('http://localhost:8081/bank/customer-accounts');
  }

  public revokeCustomerAccount(customerAccount: ActivePassiveAccount): Observable<ActivePassiveAccount> {
    return this.http.post<ActivePassiveAccount>('http://localhost:8081/bank/revoke-account', customerAccount);
  }

  public closeDay(): Observable<any> {
    return this.http.post('http://localhost:8081/bank/close-day', null);
  }

  public getDevelopmentFunds(): Observable<Array<DevelopmentFund>> {
    return this.http.get<Array<DevelopmentFund>>('http://localhost:8081/bank/development-funds');
  }
}
