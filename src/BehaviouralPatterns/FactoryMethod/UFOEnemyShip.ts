import EnemyShip from './EnemyShip';

export default class UFOEnemyShip extends EnemyShip {
  constructor() {
    super();
    this.setName('UFO Enemy Ship');
    this.setDamage(20);
  }
}
