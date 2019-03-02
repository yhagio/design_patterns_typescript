import Visitable from './Visitable';
import IVisitor from './Visitor';

export default class Tobacco implements Visitable {
  private type: string = 'Tobacco';

  constructor(private price: number) {}

  getType(): string {
    return this.type;
  }

  accept(visitor: IVisitor): number {
    return visitor.visit(this);
  }

  getPrice(): number {
    return this.price;
  }
}
