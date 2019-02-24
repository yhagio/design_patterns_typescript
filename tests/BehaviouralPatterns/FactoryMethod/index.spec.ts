import EnemyShipFactory from '../../../src/BehaviouralPatterns/FactoryMethod/EnemyShipFactory';

describe('FactoryMethod', () => {
  let enemyShipFactory;
  beforeEach(() => {
    enemyShipFactory = new EnemyShipFactory();
  });

  test('Create BIG UFO Enemy Ship ', () => {
    const bigUFOEnemyShip = enemyShipFactory.makeEnemyShip('B');

    expect(bigUFOEnemyShip.getName()).toEqual('Big UFO Enemy Ship');
  });

  test('Create Rocket Enemy Ship ', () => {
    const rocketEnemyShip = enemyShipFactory.makeEnemyShip('R');

    expect(rocketEnemyShip.getName()).toEqual('Rocket Enemy Ship');
  });
});
