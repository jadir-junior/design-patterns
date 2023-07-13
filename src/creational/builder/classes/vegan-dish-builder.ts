import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol<MealBox> {
  private _mealBox: MealBox = new MealBox();

  static builder(): VeganDishBuilder {
    return new VeganDishBuilder();
  }

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._mealBox.add(rice, beans);
    return this;
  }

  build(): MealBox {
    return this._mealBox;
  }
}
