import { IAddressDetials } from "./interface/address-details.interface";
import { IPersonAddressBuilder } from "./interface/person-address-builder.interface";
import { Person } from "./person";
import { PersonBuilder } from "./person-builder";

export class PersonAddressBuilder extends PersonBuilder implements IPersonAddressBuilder<PersonAddressBuilder> {
  constructor(person: Person) {
    super();
  }
  setHomeAddress(address: IAddressDetials): PersonAddressBuilder {
    const { city, pincode, streeName } = address;
    this.person.homeAddress = { city, pincode, streeName };
    return this;
  }
  setOffciceAddress(address: IAddressDetials): PersonAddressBuilder {
    const { city, pincode, streeName } = address;
    this.person.officeAddress = { city, pincode, streeName };
    return this;
  }
}
