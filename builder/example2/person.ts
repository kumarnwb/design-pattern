import { IAddressDetials } from "./interface/address-details.interface";

export class Person {
  homeAddress: IAddressDetials | null;
  name: string;
  officeAddress: IAddressDetials | null;
  age: number;
  earning: number;
  worksAt: string;
  designation: string;
  constructor() {
    this.homeAddress = this.officeAddress = null;
    this.name = this.worksAt = this.designation = "";
    this.age = this.earning = 0;
  }
}
