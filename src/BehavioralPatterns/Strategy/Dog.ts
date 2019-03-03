import Animal from './Animal';
import { CantFly } from './Fly';

export default class Dog extends Animal {
  constructor() {
    super();
    this.setSound('BOW WOW');
    this.setFlyingAbility(new CantFly());
  }
}
