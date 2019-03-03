import EnemyShip from './EnemyShip';

export default class RocketEnemyShip extends EnemyShip {
  constructor() {
    super();
    this.setName('Rocket Enemy Ship');
    this.setDamage(50);
  }
}
