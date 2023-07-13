import { Prototype } from '../interfaces/prototype';

export class Person implements Prototype<Person> {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const newCopyObject = Object.create(this);
    newCopyObject.addresses = this.addresses.map((address) => address.clone());
    return newCopyObject;
  }

  addAddresses(address: Address): void {
    this.addresses.push(address);
  }
}

class Address implements Prototype<Address> {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const person1 = new Person('Mick Jagger', 34);
const address = new Address('Rua Santa Isabel', 57);
person1.addAddresses(address);
console.log('Person 1');
console.log(person1);

console.log('----- ------');

const person2 = person1.clone();

// Alter in the person1 and reflect in the person1 and person2
person1.addresses[0].street = 'Rua Sabará';

person2.name = 'Alice';
console.log('Person 2');
console.log(person2);
console.log(person2.addresses);

console.log('------ ------');
console.log('Person 1:');
console.log(person1);
console.log(person1.addresses);
