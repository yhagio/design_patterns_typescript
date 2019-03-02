import IPizza from './Pizza';
import ToppingDecorator from './ToppingDecorator';

export default class Mozzarella extends ToppingDecorator {
  constructor(newPizza: IPizza) {
    super(newPizza);
  }

  // Returns the result of calling getDescription() for
  // PlainPizza and adds " mozzarella" to it

  getDescription(): string {
    return this.tempPizza.getDescription() + ', mozzarella';
  }

  getCost(): number {
    return this.tempPizza.getCost() + 0.5;
  }
}
