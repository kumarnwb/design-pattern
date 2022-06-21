import { IAddressDetials } from "./address-details.interface";

export interface IPersonAddressBuilder<T> {
  setHomeAddress(address: IAddressDetials): T;
  setOffciceAddress(address: IAddressDetials): T;
}
