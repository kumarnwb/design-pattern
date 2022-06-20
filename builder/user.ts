import { Address } from "./address";

export class User {
  name: string | null = null;
  age: number | null = null;
  phone: number | null = null;
  address: Address | null = null;
  constructor(name: string) {
    this.name = name;
  }
}
