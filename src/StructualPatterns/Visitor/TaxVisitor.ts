import IVisitor from './Visitor';
import Visitable from './Visitable';

// Concrete Visitor Class

export default class TaxVisitor implements IVisitor {
  // This is created so that each item is sent to the
  // right version of visit() which is required by the
  // Visitor interface and defined below
  constructor() {}

  visit(visitable: Visitable): number {
    if (visitable.getType() === 'Liquor') {
      return visitable.getPrice() * 0.5 + visitable.getPrice();
    } else if (visitable.getType() === 'Tobacco') {
      return visitable.getPrice() * 1.5 + visitable.getPrice();
    } else if (visitable.getType() === 'Necessity') {
      return visitable.getPrice();
    }
  }
}
