import TomatoSauce from '../../../src/StructuralPatterns/Decorator/TomatoSauce';
import Mozzarella from '../../../src/StructuralPatterns/Decorator/Mozzarella';
import PlainPizza from '../../../src/StructuralPatterns/Decorator/PlainPizza';

describe('Decorator', () => {
  test('Test Pizza Maker', () => {
    const basicPizza = new TomatoSauce(new Mozzarella(new PlainPizza()));

    expect(basicPizza.getDescription()).toEqual(
      'Thin dough, mozzarella, tomato sauce'
    );
    expect(basicPizza.getCost()).toEqual(4.85); // 4.0 + 0.5 + 0.35
  });
});
