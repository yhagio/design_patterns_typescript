import Animal from './Animal';

export default class WorkWithAnimal {
  static speak(animal: Animal): string {
    return animal.getSound();
  }
}
