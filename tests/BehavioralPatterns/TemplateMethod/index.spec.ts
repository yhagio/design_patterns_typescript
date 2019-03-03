import ItalianHoagie from '../../../src/BehavioralPatterns/TemplateMethod/ItalianHoagie';
import VeggieHoagie from '../../../src/BehavioralPatterns/TemplateMethod/VeggieHoagie';

describe('Template Method', () => {
  test('Make Sandwich', () => {
    const italianHoagie = new ItalianHoagie();
    const vegHoagie = new VeggieHoagie();

    expect(italianHoagie.makeSandwich()).toEqual(
      'Wrap the Hoagie: The Hoagie is Cut. MEAT: Salami Pepperoni Capicola Ham CHEESE: Provolone VEGGIES: Lettuce Tomatoes Onions Sweet Peppers CONDIMENTS: Oil Vinegar '
    );
    expect(vegHoagie.makeSandwich()).toEqual(
      'Wrap the Hoagie: The Hoagie is Cut. VEGGIES: Lettuce Tomatoes Onions Sweet Peppers CONDIMENTS: Oil Vinegar '
    );
  });
});
