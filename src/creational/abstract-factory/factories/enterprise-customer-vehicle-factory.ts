import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-custumer';
import { EnterpriseVehicle } from '../vehicle/enterprise-vehicle';
import { Vehicle } from '../vehicle/vehicle';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class EnterpriseCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(name: string): Customer {
    return new EnterpriseCustomer(name);
  }

  createVehicle(name: string, customer: Customer): Vehicle {
    return new EnterpriseVehicle(name, this.createCustomer(customer.name));
  }
}
