import { Transport } from './transport';

export class Ship implements Transport {
  deliver(): void {
    console.log('Entraga por mar em um contêiner');
  }
}
