import IESWeapon from './ESWeapon';
import IESEngine from './ESEngine';
import IEnemyShipFactory from './EnemyShipFactory';
import ESUFOBossGun from './ESUFOBossGun';
import ESUFOBossEngine from './ESUFOBossEngine';

export default class UFOBossEnemyShipFactory implements IEnemyShipFactory {
  addESGun(): IESWeapon {
    return new ESUFOBossGun();
  }

  addESEngine(): IESEngine {
    return new ESUFOBossEngine();
  }
}
