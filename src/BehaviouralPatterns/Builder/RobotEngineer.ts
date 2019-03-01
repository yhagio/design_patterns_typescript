import IRobotBuilder from './RobotBuilder';
import Robot from './Robot';

export default class RobotEngineer {
  private robotBuilder: IRobotBuilder;

  constructor(robotBuilder: IRobotBuilder) {
    this.robotBuilder = robotBuilder;
  }

  getRobot(): Robot {
    return this.robotBuilder.getRobot();
  }

  makeRobot(): void {
    this.robotBuilder.buildRobotHead();
    this.robotBuilder.buildRobotTorso();
    this.robotBuilder.buildRobotArms();
    this.robotBuilder.buildRobotLegs();
  }
}
