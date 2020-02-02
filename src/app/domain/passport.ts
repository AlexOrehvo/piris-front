export class Passport {

  constructor(
    public id?: number,
    public uuid?: string,
    public passportNumber?: string,
    public passportSeries?: string,
    public identificationNumber?: string,
    public dateOfIssue?: Date,
    public placeOfBirth?: string,
    public authority?: string
  ) {}
}
