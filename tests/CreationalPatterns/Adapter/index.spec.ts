import EnemyTank from '../../../src/CreationalPatterns/Adapter/EnemyTank';
import EnemyRobot from '../../../src/CreationalPatterns/Adapter/EnemyRobot';
import EnemyRobotAdapter from '../../../src/CreationalPatterns/Adapter/EnemyRobotAdapter';

describe('Adapter', () => {
  test('Test enemy robot adapter', () => {
    const tank = new EnemyTank();
    const robot = new EnemyRobot();
    const robotAdapter = new EnemyRobotAdapter(robot);

    // Robot
    expect(robot.reactToHuman('Paul')).toEqual('Enemy Robot Tramps on Paul');
    expect(robot.walkForward()).toEqual('Enemy Robot Walks Forward 3 spaces');
    expect(robot.smashWithHands()).toEqual(
      'Enemy Robot Causes 2 Damage With Its Hands'
    );

    // Tank
    expect(tank.assignDriver('Paul')).toEqual('Paul is driving the tank');
    expect(tank.driveForward()).toEqual('Enemy Tank moves 3 spaces');
    expect(tank.fireWeapon()).toEqual('Enemy Tank Does 2 Damage');

    // With adpater, Robot -> Tank methods
    expect(robotAdapter.assignDriver('Paul')).toEqual(
      'Enemy Robot Tramps on Paul'
    );
    expect(robotAdapter.driveForward()).toEqual(
      'Enemy Robot Walks Forward 3 spaces'
    );
    expect(robotAdapter.fireWeapon()).toEqual(
      'Enemy Robot Causes 2 Damage With Its Hands'
    );
  });
});
