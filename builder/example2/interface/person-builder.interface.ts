
export interface IPersonBuilder<T> {
  setName(name: string): T;
  setAge(age: number): T;
  setAddress(): T;
  setEmploymentDetails(): T;
}
