import Animal from './Animal';

export default class Cat extends Animal {
  constructor() {
    super();
    this.setSound('Meow');
  }

  attack(): void {
    console.log('Cat attacks');
  }
}
