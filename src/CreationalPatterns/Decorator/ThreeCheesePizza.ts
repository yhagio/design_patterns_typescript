import IPizza from './Pizza';

// By going this route I'll have to create a new subclass
// for an infinite number of pizza.
// I'd also have to change prices in many classes
// when just 1 Pizza topping cost changes

// Inheritance is static while composition is dynamic
// Through composition I'll be able to add new functionality
// by writing new code rather than by changing current code

export default class ThreeCheesePizza implements IPizza {
  private description: string = 'Mozzarella, Fontina, Parmesan Cheese Pizza';
  private cost: number = 10.5;

  setDescription(newDescription: string): void {
    this.description = newDescription;
  }

  getDescription(): string {
    return this.description;
  }
  setCost(newCost: number): void {
    this.cost = newCost;
  }

  getCost(): number {
    return this.cost;
  }
}
