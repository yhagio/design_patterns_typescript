// This is the Adaptee. The Adapter sends method calls
// to objects that use the EnemyAttacker interface
// to the right methods defined in EnemyRobot

export default class EnemyRobot {
  private num: number = 1;

  smashWithHands(): string {
    return 'Enemy Robot Causes ' + (this.num + 1) + ' Damage With Its Hands';
  }

  walkForward(): string {
    return 'Enemy Robot Walks Forward ' + (this.num + 2) + ' spaces';
  }

  reactToHuman(driverName: string) {
    return 'Enemy Robot Tramps on ' + driverName;
  }
}
