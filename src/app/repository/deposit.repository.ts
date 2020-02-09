import {Injectable, OnInit} from '@angular/core';
import {Deposit} from '../domain/deposit';
import {DepositResource} from '../web/rest/deposit.resource';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepositRepository implements OnInit {

  constructor(
    private depositResource: DepositResource
  ) { }

  ngOnInit(): void {

  }

  public getDeposits(): Observable<Array<Deposit>> {
    return this.depositResource.getDeposits();
  }
}
