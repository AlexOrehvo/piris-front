import {Deposit} from './deposit';
import {User} from './user';

export class BankAccount {

  constructor(
    public id?: number,
    public uuid?: string,
    public accountNumber?: string,
    public accountAmount?: number,
    public deposit?: Deposit,
    public creator?: User,
    public startDate?: Date,
    public endDate?: Date
  ) {
    this.creator = new User();
    this.deposit = new Deposit();
  }
}
