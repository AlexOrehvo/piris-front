export class Deposit {

  constructor(
    public id?: number,
    public uuid?: string,
    public type?: string,
    public name?: string,
    public percent?: number,
    public currency?: string
  ) { }
}
