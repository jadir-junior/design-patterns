function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Mick',
  lastName: 'Jagger',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = `i'm at sub class`;
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Alice', 'Rodini', 35);
console.log(person1);
console.log(person1.fullName());
console.log('--- ---');

const subperson1 = new SubPerson('Jadir', 'Junior', 34);
console.log(subperson1);
console.log(subperson1.fullName());
