const personPrototype = {
  firstName: 'Mick',
  lastName: 'Jagger',
  age: 34,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log('Person Prototype:');
console.log(personPrototype);
console.log('---');

console.log('Another Person:');
const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
