import { IPersonJobBuilder } from "./interface/person-job-builder.interface";
import { Person } from "./person";
import { PersonBuilder } from "./person-builder";

export class PersonJobBuilder extends PersonBuilder implements IPersonJobBuilder<PersonJobBuilder> {
  constructor(person: Person) {
    super();
  }
  worksAt(organization: string): PersonJobBuilder {
    this.person.worksAt = organization;
    return this;
  }
  designation(title: string): PersonJobBuilder {
    this.person.designation = title;
    return this;
  }
  earning(annualIncome: number): PersonJobBuilder {
    this.person.earning = annualIncome;
    return this;
  }
}
