import IEnemyAttacker from './EnemyAttacker';
import EnemyRobot from './EnemyRobot';

// The Adapter must provide an alternative action for
// the the methods that need to be used because
// EnemyAttacker was implemented.

// This adapter does this by containing an object
// of the same type as the Adaptee (EnemyRobot)
// All calls to EnemyAttacker methods are sent
// instead to methods used by EnemyRobot

export default class EnemyRobotAdapter implements IEnemyAttacker {
  constructor(public theRobot: EnemyRobot) {}

  fireWeapon(): string {
    return this.theRobot.smashWithHands();
  }

  driveForward(): string {
    return this.theRobot.walkForward();
  }

  assignDriver(driverName: string): string {
    return this.theRobot.reactToHuman(driverName);
  }
}
