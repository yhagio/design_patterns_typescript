import UFOEnemyShip from './UFOEnemyShip';

export default class BigUFOEnemyShip extends UFOEnemyShip {
  constructor() {
    super();
    this.setName('Big UFO Enemy Ship');
    this.setDamage(70);
  }
}
