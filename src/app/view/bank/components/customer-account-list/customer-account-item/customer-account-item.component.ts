import {Component, Input, OnInit} from '@angular/core';
import {ActivePassiveAccount} from '../../../../../domain/active-passive-account';

@Component({
  selector: 'app-customer-account-item',
  templateUrl: './customer-account-item.component.html',
  styleUrls: ['./customer-account-item.component.scss']
})
export class CustomerAccountItemComponent implements OnInit {

  @Input()
  private account: ActivePassiveAccount;

  constructor() { }

  ngOnInit() {
  }

}
