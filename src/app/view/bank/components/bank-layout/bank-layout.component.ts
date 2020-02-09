import { Component, OnInit } from '@angular/core';
import {SidebarItem} from '../../../../model/sidebar-item';
import {DepositService} from '../../../../services/deposit.service';

@Component({
  selector: 'app-bank-layout',
  templateUrl: './bank-layout.component.html',
  styleUrls: ['./bank-layout.component.scss']
})
export class BankLayoutComponent implements OnInit {

  private bankItems: Array<SidebarItem> = [
    {
      link: '/main/bank/deposits',
      label: 'Deposit programs',
      icon: 'fa-percent'
    },
    {
      link: '/main/bank/customer-accounts',
      label: 'Customer accounts',
      icon: 'fa-id-card-o'
    },
    {
      link: '/main/bank/development-funds',
      label: 'Bank Development Fund Accounts',
      icon: 'fa-bar-chart'
    }
  ];

  constructor(
    private depositService: DepositService
  ) { }

  ngOnInit() {
  }

  closeDay(): void {
    this.depositService.closeDay()
      .subscribe(data => alert('Day was closed'));
  }
}
