import { Component, OnInit } from '@angular/core';
import {Deposit} from '../../../../domain/deposit';
import {DepositService} from '../../../../services/deposit.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.scss']
})
export class DepositListComponent implements OnInit {

  constructor(
    private depositService: DepositService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  get deposits(): Array<Deposit> {
    return this.depositService.getDeposits();
  }

  back(): void {
    this.location.back();
  }
}
