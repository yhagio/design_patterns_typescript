import Robot from './Robot';

export default interface IRobotBuilder {
  buildRobotHead(): void;
  buildRobotTorso(): void;
  buildRobotArms(): void;
  buildRobotLegs(): void;
  getRobot(): Robot;
}
