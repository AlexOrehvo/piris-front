import {BankAccount} from './bank-account';

export class ActivePassiveAccount {

  constructor(
    public active?: BankAccount,
    public passive?: BankAccount
  ) { }
}
