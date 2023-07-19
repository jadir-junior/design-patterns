import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../vehicle/individual-vehicle';
import { Vehicle } from '../vehicle/vehicle';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class IndividualCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(name: string): Customer {
    return new IndividualCustomer(name);
  }

  createVehicle(name: string, customer: Customer): Vehicle {
    return new IndividualVehicle(name, this.createCustomer(customer.name));
  }
}
