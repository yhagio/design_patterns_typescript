import ILiving from './Living';

export default class Monkey implements ILiving {
  private name: string;
  private height: number;
  private weight: number;
  private favFood: string;
  private speed: number;
  private sound: string;

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number): void {
    if (height < 0) {
      throw new Error('Invalid height');
    }
    this.height = height;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    if (weight < 0) {
      throw new Error('Invalid weight');
    }
    this.weight = weight;
  }

  getFavFood(): string {
    return this.favFood;
  }

  setFavFood(favFood: string): void {
    this.favFood = favFood;
  }

  getSpeed(): number {
    return this.speed;
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }

  getSound(): string {
    return this.sound;
  }

  setSound(sound: string): void {
    this.sound = sound;
  }
}
