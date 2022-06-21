export interface IPersonJobBuilder<T> {
  worksAt(name: string): T;
  designation(title: string): T;
  earning(annualIncome: number): T;
  
}
