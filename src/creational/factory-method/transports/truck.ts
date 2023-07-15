import { Transport } from './transport';

export class Truck implements Transport {
  deliver(): void {
    console.log('Entrega por terra em uma caixa.');
  }
}
