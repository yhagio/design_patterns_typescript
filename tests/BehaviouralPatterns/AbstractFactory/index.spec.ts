import UFOEnemyShipBuilding from '../../../src/BehaviouralPatterns/AbstractFactory/UFOEnemyShipBuilding';

describe('Abstract Factory', () => {
  test('test', () => {
    const MakeUFOs = new UFOEnemyShipBuilding();
    const grunt = MakeUFOs.orderTheShip('UFO');
    expect(grunt.getName()).toEqual('UFO Grunt Ship');
    expect(grunt.info()).toEqual(
      'The UFO Grunt Ship has a top speed of 1000 mph and an attack power of 20 damage'
    );

    const boss = MakeUFOs.orderTheShip('UFO BOSS');
    expect(boss.getName()).toEqual('UFO Boss Ship');
    expect(boss.info()).toEqual(
      'The UFO Boss Ship has a top speed of 2000 mph and an attack power of 40 damage'
    );
  });
});
