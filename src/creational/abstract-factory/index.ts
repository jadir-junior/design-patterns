import { EnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const indiviualFactory = new IndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('FIAT POLO', { name: 'Alice' });
const car2 = indiviualFactory.createVehicle('UNO', { name: 'Mick' });

car1.pickUp();
car2.pickUp();
