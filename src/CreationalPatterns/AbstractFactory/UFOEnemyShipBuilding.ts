import EnemyShipBuilding from './EnemyShipBuilding';
import EnemyShip from './EnemyShip';
import UFOEnemyShipFactory from './UFOEnemyShipFactory';
import UFOEnemyShip from './UFOEnemyShip';
import UFOBossEnemyShipFactory from './UFOBossEnemyShipFactory';
import UFOBossEnemyShip from './UFOBossEnemyShip';

export default class UFOEnemyShipBuilding extends EnemyShipBuilding {
  protected makeEnemyShip(typeOfShip: string): EnemyShip {
    let theEnemyShip: EnemyShip;
    if (typeOfShip === 'UFO') {
      const shipPartsFactory = new UFOEnemyShipFactory();
      theEnemyShip = new UFOEnemyShip(shipPartsFactory);
      theEnemyShip.setName('UFO Grunt Ship');
    } else if (typeOfShip === 'UFO BOSS') {
      const shipPartsFactory = new UFOBossEnemyShipFactory();
      theEnemyShip = new UFOBossEnemyShip(shipPartsFactory);
      theEnemyShip.setName('UFO Boss Ship');
    }

    return theEnemyShip;
  }
}
