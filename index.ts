import { UserBuilder } from "./builder";

const user = new UserBuilder("rohit").setAge(12).setPhone(12).setAddress({
  city: "pune",
  zip: 12345,
});

console.log(user);
