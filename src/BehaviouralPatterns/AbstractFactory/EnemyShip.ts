import IESWeapon from './ESWeapon';
import IESEngine from './ESEngine';

export default abstract class EnemyShip {
  private name: string;
  public weapon: IESWeapon;
  public engine: IESEngine;

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  abstract makeShip(): void;

  followHeroShip(): string {
    return `${this.name} is following the hero`;
  }

  displayEnemyship(): string {
    return `${this.name} is on the screen`;
  }

  info(): string {
    return `The ${
      this.name
    } has a top speed of ${this.engine.info()} and an attack power of ${this.weapon.info()}`;
  }
}
