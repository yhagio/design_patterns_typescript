import ToppingDecorator from './ToppingDecorator';
import IPizza from './Pizza';

export default class TomatoSauce extends ToppingDecorator {
  constructor(newPizza: IPizza) {
    super(newPizza);
  }

  // Returns the result of calling getDescription() for
  // PlainPizza, Mozzarella and then TomatoSauce

  getDescription(): string {
    return this.tempPizza.getDescription() + ', tomato sauce';
  }

  getCost(): number {
    return this.tempPizza.getCost() + 0.35;
  }
}
