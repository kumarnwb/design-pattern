/* import { UserBuilder } from "./builder/example1";

const user = new UserBuilder("rohit").setAge(12).setPhone(12).setAddress({
  city: "pune",
  zip: 12345,
});

console.log(user); */

import { PersonBuilder } from "./builder";

const pb = new PersonBuilder();
const user = pb
  .setName("Ankit")
  .setAge(27)
  .setAddress()
  .setHomeAddress({
    city: "banglore",
    pincode: 123456,
    streeName: "harlur",
  })
  .setEmploymentDetails()
  .earning(5000000)
  .designation("Senior Software Engineer")
  .worksAt("Amazon");

console.log(user);
