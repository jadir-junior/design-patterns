import { TransportType } from '../enums/transport-type';
import { Train } from '../transports/train';
import { Transport } from '../transports/transport';
import { Truck } from '../transports/truck';
import { Logistics } from './logistics';

export class RoadLogistics extends Logistics {
  createTransport(roadType: TransportType): Transport {
    switch (roadType) {
      case TransportType.TRUCK:
        return new Truck();
      case TransportType.TRAIN:
        return new Train();
      default:
        return new Truck();
    }
  }
}
