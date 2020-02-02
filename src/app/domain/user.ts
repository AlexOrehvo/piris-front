import {Passport} from "./passport";
import {Option} from "./option";

export class User {

  constructor(
    public id?: number,
    public uuid?: string,
    public firstName?: string,
    public lastName?: string,
    public middleName?: string,
    public birthday?: Date,
    public gender?: Option,
    public homePhoneNumber?: string,
    public mobilePhoneNumber?: string,
    public maritalStatus?: Option,
    public disability?: Option,
    public pensioner?: boolean,
    public dutyBound?: boolean,
    public passport?: Passport,
    public citizenship?: Option,
    public email?: string,
    public city?: Option,
    public address?: string,
    public monthlyIncome?: number
  ) {
    this.passport = new Passport();
    this.gender = new Option();
    this.disability = new Option();
    this.maritalStatus = new Option();
    this.city = new Option();
  }
}
