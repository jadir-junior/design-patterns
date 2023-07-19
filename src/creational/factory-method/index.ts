import { TransportType } from './enums/transport-type';
import { RoadLogistics } from './factories/road-logistics';
import { SeaLogistics } from './factories/sea-logistics';

class Index {
  constructor(
    private roadFactory: RoadLogistics,
    private seaFactory: SeaLogistics,
  ) {}

  initialize(): void {
    const truck1 = this.roadFactory.createTransport(TransportType.TRUCK);
    const truck2 = this.roadFactory.createTransport(TransportType.TRUCK);
    const sea1 = this.seaFactory.createTransport();
    const train1 = this.roadFactory.createTransport(TransportType.TRAIN);

    truck1.deliver();
    sea1.deliver();
    truck2.deliver();
    train1.deliver();
  }
}

const index = new Index(new RoadLogistics(), new SeaLogistics());
index.initialize();
