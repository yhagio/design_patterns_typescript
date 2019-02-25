import IEnemyShipFactory from './EnemyShipFactory';
import IESWeapon from './ESWeapon';
import ESUFOGun from './ESUFOGun';
import IESEngine from './ESEngine';
import ESUFOEngine from './ESUFOEngine';

export default class UFOEnemyShipFactory implements IEnemyShipFactory {
  addESGun(): IESWeapon {
    return new ESUFOGun();
  }
  addESEngine(): IESEngine {
    return new ESUFOEngine();
  }
}
