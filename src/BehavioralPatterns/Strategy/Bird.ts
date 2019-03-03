import Animal from './Animal';
import { Fly } from './Fly';

export default class Bird extends Animal {
  constructor() {
    super();
    this.setFlyingAbility(new Fly());
  }
}
