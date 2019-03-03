import IESWeapon from './ESWeapon';
import IESEngine from './ESEngine';

export default interface IEnemyShipFactory {
  addESGun(): IESWeapon;
  addESEngine(): IESEngine;
}
