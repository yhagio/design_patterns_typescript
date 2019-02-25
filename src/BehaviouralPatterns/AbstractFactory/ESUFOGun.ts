import IESWeapon from './ESWeapon';

export default class ESUFOGun implements IESWeapon {
  info(): string {
    return '20 damage';
  }
}
