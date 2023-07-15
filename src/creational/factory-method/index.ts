import { TransportType } from './enums/transport-type';
import { RoadLogistics } from './factories/road-logistics';
import { SeaLogistics } from './factories/sea-logistics';

const roadFactory = new RoadLogistics();
const seaFactory = new SeaLogistics();

const truck1 = roadFactory.createTransport(TransportType.TRUCK);
const truck2 = roadFactory.createTransport(TransportType.TRUCK);
const sea1 = seaFactory.createTransport();
const train1 = roadFactory.createTransport(TransportType.TRAIN);

truck1.deliver();
sea1.deliver();
truck2.deliver();
train1.deliver();
