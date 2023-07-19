import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class IndividualVehicle implements Vehicle {
  name: string;
  customer: Customer;

  constructor(name: string, customer: Customer) {
    this.name = name;
    this.customer = customer;
  }

  pickUp(): void {
    console.log(
      `O carro ${this.name} está buscando ${this.customer.name} na modalidade ('INDIVIDUAL')`,
    );
  }
}
