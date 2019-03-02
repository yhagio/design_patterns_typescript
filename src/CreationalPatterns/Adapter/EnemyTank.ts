import IEnemyAttacker from './EnemyAttacker';

// EnemyTank implements EnemyAttacker perfectly
// Our job is to make classes with different methods
// from EnemyAttacker to work with the EnemyAttacker interface

export default class EnemyTank implements IEnemyAttacker {
  private num: number = 1;

  fireWeapon(): string {
    return 'Enemy Tank Does ' + (this.num + 1) + ' Damage';
  }

  driveForward() {
    return 'Enemy Tank moves ' + (this.num + 2) + ' spaces';
  }

  assignDriver(driverName: string) {
    return driverName + ' is driving the tank';
  }
}
