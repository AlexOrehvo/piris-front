import { Component, OnInit } from '@angular/core';
import {User} from '../../../../domain/user';
import {Deposit} from '../../../../domain/deposit';
import {BankAccount} from '../../../../domain/bank-account';
import {DepositService} from '../../../../services/deposit.service';
import {Location} from '@angular/common';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deposit-edit-new',
  templateUrl: './deposit-edit-new.component.html',
  styleUrls: ['./deposit-edit-new.component.scss']
})
export class DepositEditNewComponent implements OnInit {

  private bankAccount: BankAccount = new BankAccount();

  constructor(
    private userService: UserService,
    private depositService: DepositService,
    private location: Location,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.userService.getUserById(this.activeRoute.snapshot.params.id)
      .subscribe(data => {
        Object.assign(this.bankAccount.creator, data);
      });
  }

  ngOnInit() {
  }

  get deposits(): Array<Deposit> {
    return this.depositService.getDeposits();
  }

  updateDeposit(id): void {
    this.bankAccount.deposit = this.depositService.getDepositById(Number(id));
  }

  save(): void {
    this.depositService.save(this.bankAccount)
      .subscribe(data => console.log('Success'));
  }

  back(): void {
    this.location.back();
  }
}
