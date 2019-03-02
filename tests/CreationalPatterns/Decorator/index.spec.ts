import TomatoSauce from '../../../src/CreationalPatterns/Decorator/TomatoSauce';
import Mozzarella from '../../../src/CreationalPatterns/Decorator/Mozzarella';
import PlainPizza from '../../../src/CreationalPatterns/Decorator/PlainPizza';

describe('Decorator', () => {
  test('Test Pizza Maker', () => {
    const basicPizza = new TomatoSauce(new Mozzarella(new PlainPizza()));

    expect(basicPizza.getDescription()).toEqual(
      'Thin dough, mozzarella, tomato sauce'
    );
    expect(basicPizza.getCost()).toEqual(4.85); // 4.0 + 0.5 + 0.35
  });
});
