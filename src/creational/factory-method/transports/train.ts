import { Transport } from './transport';

export class Train implements Transport {
  deliver(): void {
    console.log('Entrega por terra em ferrovia.');
  }
}
