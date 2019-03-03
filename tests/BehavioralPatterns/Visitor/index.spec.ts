import TaxVisitor from '../../../src/BehavioralPatterns/Visitor/TaxVisitor';
import TaxHolidayVisitor from '../../../src/BehavioralPatterns/Visitor/TaxHolidayVisitor';
import Necessity from '../../../src/BehavioralPatterns/Visitor/Necessity';
import Liquor from '../../../src/BehavioralPatterns/Visitor/Liquor';
import Tobacco from '../../../src/BehavioralPatterns/Visitor/Tobacco';

describe('Visitor', () => {
  test('Test visitor', () => {
    const taxCalc = new TaxVisitor();
    const taxHolidayCalc = new TaxHolidayVisitor();

    const milk = new Necessity(2);
    const vodka = new Liquor(3);
    const cigars = new Tobacco(5);

    expect(milk.accept(taxCalc)).toEqual(2);
    expect(vodka.accept(taxCalc)).toEqual(4.5);
    expect(cigars.accept(taxCalc)).toEqual(12.5);

    expect(milk.accept(taxHolidayCalc)).toEqual(2);
    expect(vodka.accept(taxHolidayCalc)).toEqual(3.6);
    expect(cigars.accept(taxHolidayCalc)).toEqual(5.5);
  });
});
