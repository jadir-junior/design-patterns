import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// const mainDish = new MainDishBuilder().makeMeal().makeBeverage().build();
const mainDish = MainDishBuilder.builder().makeMeal().makeBeverage().build();
console.log('MAIN: ', mainDish);
console.log(mainDish.getPrice());
console.log('\n');

const mainDish2 = MainDishBuilder.builder().makeMeal().build();
console.log('MAIN: ', mainDish2);
console.log(mainDish2.getPrice());
console.log('\n');

const veganDish = VeganDishBuilder.builder().makeMeal().build();
console.log('VEGAN: ', veganDish);
console.log(veganDish.getPrice());
