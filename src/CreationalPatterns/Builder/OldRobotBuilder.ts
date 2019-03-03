import IRobotBuilder from './RobotBuilder';
import Robot from './Robot';

export default class OldRobotBuilder implements IRobotBuilder {
  private robot: Robot;

  constructor() {
    this.robot = new Robot();
  }

  buildRobotHead(): void {
    this.robot.setRobotHead('Tin Head');
  }

  buildRobotTorso(): void {
    this.robot.setRobotTorso('Tin Torso');
  }

  buildRobotArms(): void {
    this.robot.setRobotArms('Blowtorch Arms');
  }

  buildRobotLegs(): void {
    this.robot.setRobotLegs('Rollar Skates');
  }

  getRobot(): Robot {
    return this.robot;
  }
}
