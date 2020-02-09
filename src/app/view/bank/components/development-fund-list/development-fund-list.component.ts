import { Component, OnInit } from '@angular/core';
import {DevelopmentFund} from '../../../../domain/development-fund';
import {DepositService} from '../../../../services/deposit.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-development-fund-list',
  templateUrl: './development-fund-list.component.html',
  styleUrls: ['./development-fund-list.component.scss']
})
export class DevelopmentFundListComponent implements OnInit {

  private developmentFunds: Array<DevelopmentFund> = [];

  constructor(
    private depositService: DepositService,
    private location: Location
  ) {
    this.depositService.getDevelopmentFunds()
      .subscribe(data => this.developmentFunds = data);
  }

  ngOnInit() {
  }

  back(): void {
    this.location.back();
  }
}
