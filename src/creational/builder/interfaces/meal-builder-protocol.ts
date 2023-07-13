export interface MealBuilderProtocol<T> {
  makeMeal(): this;
  reset(): void;
  build(): T;
}
