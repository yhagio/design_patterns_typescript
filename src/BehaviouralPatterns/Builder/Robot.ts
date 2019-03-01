import IRobotPlan from './RobotPlan';

export default class Robot implements IRobotPlan {
  private robotHead: string;
  private robotTorso: string;
  private robotArms: string;
  private robotLegs: string;

  setRobotHead(head: string): void {
    this.robotHead = head;
  }
  getRobotHead() {
    return this.robotHead;
  }

  setRobotTorso(torso: string): void {
    this.robotTorso = torso;
  }
  getRobotTorso() {
    return this.robotTorso;
  }

  setRobotArms(arms: string): void {
    this.robotArms = arms;
  }
  getRobotArms() {
    return this.robotArms;
  }

  setRobotLegs(legs: string): void {
    this.robotLegs = legs;
  }
  getRobotLegs() {
    return this.robotLegs;
  }
}
