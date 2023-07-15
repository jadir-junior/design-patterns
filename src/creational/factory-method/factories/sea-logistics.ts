import { Ship } from '../transports/ship';
import { Transport } from '../transports/transport';
import { Logistics } from './logistics';

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}
