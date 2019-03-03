import OldRobotBuilder from '../../../src/CreationalPatterns/Builder/OldRobotBuilder';
import RobotEngineer from '../../../src/CreationalPatterns/Builder/RobotEngineer';

describe('Builder', () => {
  test('creates an old style robot', () => {
    const oldStyleRobot = new OldRobotBuilder();
    const robotEngineer = new RobotEngineer(oldStyleRobot);
    robotEngineer.makeRobot();
    const firstRobot = robotEngineer.getRobot();

    expect(firstRobot.getRobotHead()).toEqual('Tin Head');
    expect(firstRobot.getRobotArms()).toEqual('Blowtorch Arms');
    expect(firstRobot.getRobotTorso()).toEqual('Tin Torso');
    expect(firstRobot.getRobotLegs()).toEqual('Rollar Skates');
  });
});
