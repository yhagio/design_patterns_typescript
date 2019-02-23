export default interface ILiving {
  setName(name: string): void;
  getName(): string;
  setWeight(weight: number): void;
  getWeight(): number;
  setHeight(height: number): void;
  getHeight(): number;
  setFavFood(favFood: string): void;
  getFavFood(): string;
  setSpeed(speed: number): void;
  getSpeed(): number;
  setSound(sound: string): void;
  getSound(): string;
}
