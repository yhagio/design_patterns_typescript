import EnemyShip from './EnemyShip';
import UFOEnemyShip from './UFOEnemyShip';
import RocketEnemyShip from './RocketEnemyShip';
import BigUFOEnemyShip from './BigUFOEnemyShip';

export default class EnemyShipFactory {
  makeEnemyShip(newShipType: string): EnemyShip {
    if (newShipType === 'B') {
      return new BigUFOEnemyShip();
    } else if (newShipType === 'R') {
      return new RocketEnemyShip();
    } else {
      return new UFOEnemyShip();
    }
  }
}
