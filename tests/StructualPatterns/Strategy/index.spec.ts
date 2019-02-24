import Dog from '../../../src/StructualPatterns/Strategy/Dog';
import Bird from '../../../src/StructualPatterns/Strategy/Bird';

describe('Strategy', () => {
  test('Dog cant fly', () => {
    const dog = new Dog();
    expect(dog.tryToFly()).toEqual('Cant fly');
  });

  test('Bird can fly', () => {
    const bird = new Bird();
    expect(bird.tryToFly()).toEqual('Fly');
  });
});
