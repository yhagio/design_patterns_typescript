import TaxVisitor from '../../../src/StructualPatterns/Visitor/TaxVisitor';
import TaxHolidayVisitor from '../../../src/StructualPatterns/Visitor/TaxHolidayVisitor';
import Necessity from '../../../src/StructualPatterns/Visitor/Necessity';
import Liquor from '../../../src/StructualPatterns/Visitor/Liquor';
import Tobacco from '../../../src/StructualPatterns/Visitor/Tobacco';

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
