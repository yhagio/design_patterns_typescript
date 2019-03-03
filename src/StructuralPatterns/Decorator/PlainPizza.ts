import IPizza from './Pizza';

// Implements the Pizza interface with only the required
// methods from the interface

// Every Pizza made will start as a PlainPizza

export default class PlainPizza implements IPizza {
  getDescription(): string {
    return 'Thin dough';
  }

  getCost(): number {
    return 4.0;
  }
}
