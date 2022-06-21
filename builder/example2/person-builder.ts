import { IPersonBuilder } from "./interface/person-builder.interface";
import { Person } from "./person";

export class PersonBuilder implements IPersonBuilder<PersonBuilder> {
  protected person: Person;
  constructor(person = new Person()) {
    this.person = person;
  }
  setAddress(): PersonAddressBuilder {
    return new PersonAddressBuilder(this.person);
  }
  setEmploymentDetails(): PersonJobBuilder {
    return new PersonJobBuilder(this.person);
  }
  setName(name: string): PersonBuilder {
    this.person.name = name;
    return this;
  }
  setAge(age: number): PersonBuilder {
    this.person.age = age;
    return this;
  }

  build(): Person {
    return this.person;
  }
}

/**
 * Added over here because of the these issues: https://github.com/Microsoft/TypeScript/issues/20361
 *
 * fix taken from this article: https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
 */
import { PersonAddressBuilder } from "./person-address-builder";
import { PersonJobBuilder } from "./person-job-builder";
