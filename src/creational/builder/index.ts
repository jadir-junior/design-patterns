import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
const main = mainDishBuilder.makeMeal().makeDesert().build();
console.log('MAIN: ', main);
console.log(main.getPrice());
console.log('\n');

const veganDishBuilder = new VeganDishBuilder();
const veganDish = veganDishBuilder.makeMeal().build();
console.log('VEGAN: ', veganDish);
console.log(veganDish.getPrice());
