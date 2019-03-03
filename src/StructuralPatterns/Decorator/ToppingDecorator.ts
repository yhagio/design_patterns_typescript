import IPizza from './Pizza';

// Has a "Has a" relationship with Pizza. This is an
// Aggregation Relationship

export default abstract class ToppingDecorator implements IPizza {
  protected tempPizza: IPizza;

  // Assigns the type instance to this attribute
  // of a Pizza

  // All decorators can dynamically customize the Pizza
  // instance PlainPizza because of this

  constructor(newPizza: IPizza) {
    this.tempPizza = newPizza;
  }

  getDescription(): string {
    return this.tempPizza.getDescription();
  }

  getCost(): number {
    return this.tempPizza.getCost();
  }
}
