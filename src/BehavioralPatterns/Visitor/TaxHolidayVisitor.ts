import IVisitor from './Visitor';
import Visitable from './Visitable';

// Concrete Visitor Class

export default class TaxHolidayVisitor implements IVisitor {
  // This formats the item prices to 2 decimal places

  // This is created so that each item is sent to the
  // right version of visit() which is required by the
  // Visitor interface and defined below

  constructor() {}

  visit(visitable: Visitable): number {
    if (visitable.getType() === 'Liquor') {
      return visitable.getPrice() * 0.2 + visitable.getPrice();
    } else if (visitable.getType() === 'Tobacco') {
      return visitable.getPrice() * 0.1 + visitable.getPrice();
    } else if (visitable.getType() === 'Necessity') {
      return visitable.getPrice();
    }
  }
}
