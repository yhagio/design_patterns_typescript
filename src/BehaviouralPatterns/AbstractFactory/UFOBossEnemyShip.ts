import EnemyShip from './EnemyShip';
import IEnemyShipFactory from './EnemyShipFactory';

export default class UFOBossEnemyShip extends EnemyShip {
  constructor(private shipFactory: IEnemyShipFactory) {
    super();
  }

  makeShip(): void {
    this.weapon = this.shipFactory.addESGun();
    this.engine = this.shipFactory.addESEngine();
  }
}
