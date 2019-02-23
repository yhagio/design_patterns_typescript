import Animal from './Animal';

export default class Dog extends Animal {
  constructor() {
    super();
    this.setSound('BOW WOW');
  }

  digHole(): void {
    console.log('Dog digs hole');
  }
}
