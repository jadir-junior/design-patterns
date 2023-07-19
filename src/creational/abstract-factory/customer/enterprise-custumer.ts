import { Customer } from './customer';

export class EnterpriseCustomer implements Customer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
