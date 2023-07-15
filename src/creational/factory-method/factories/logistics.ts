import { TransportType } from '../enums/transport-type';
import { Transport } from '../transports/transport';

export abstract class Logistics {
  abstract createTransport(transporType?: TransportType): Transport;
}
