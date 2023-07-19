import { Customer } from './customer';

export class IndividualCustomer implements Customer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
