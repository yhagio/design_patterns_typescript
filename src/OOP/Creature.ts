// If you don't want the user to create objects from
// a class mark it as abstract.
// Subclasses can still extend it
export default abstract class Creature {
  // protected fields are like private fields except
  // subclasses can inherit them
  protected name: string;
  protected height: number;
  protected weight: number;
  protected favFood: string;
  protected speed: number;
  protected sound: string;

  public abstract setName(name: string): void;
  public abstract getName(): string;
  public abstract setWeight(weight: number): void;
  public abstract getWeight(): number;
  public abstract setHeight(height: number): void;
  public abstract getHeight(): number;
  public abstract setFavFood(favFood: string): void;
  public abstract getFavFood(): string;
  public abstract setSpeed(speed: number): void;
  public abstract getSpeed(): number;
  public abstract setSound(sound: string): void;
  public abstract getSound(): string;
}
