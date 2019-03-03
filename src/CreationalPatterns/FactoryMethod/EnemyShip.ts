export default class EnemyShip {
  private name: string;
  private damage: number;

  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getDamage(): number {
    return this.damage;
  }
  setDamage(damage: number): void {
    this.damage = damage;
  }

  followHeroShip(): string {
    return `${this.name} is following the hero`;
  }

  displayEnemyship(): string {
    return `${this.name} is on the screen`;
  }

  enemyShipShoots(): string {
    return `${this.name} attacks and does ${this.damage}`;
  }
}
