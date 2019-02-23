import Dog from '../../src/OOP/Dog';
import Cat from '../../src/OOP/Cat';
import WorkWithAnimal from '../../src/OOP/WorkWithAnimals';
import Giraffe from '../../src/OOP/Giraffe';
import Monkey from '../../src/OOP/Monkey';

describe('OOP', () => {
  test('Dog', () => {
    const dog = new Dog();
    dog.setName('Hachi');
    expect(dog.getName()).toEqual('Hachi');
    expect(dog.getSound()).toEqual('BOW WOW');
  });

  test('Cat', () => {
    const cat = new Cat();
    cat.setName('Nene');
    expect(cat.getName()).toEqual('Nene');
    expect(cat.getSound()).toEqual('Meow');
  });

  test('WorkWithAnimal', () => {
    const cat = new Cat();
    expect(WorkWithAnimal.speak(cat)).toEqual('Meow');
  });

  test('Giraffe', () => {
    const giraffe = new Giraffe();
    giraffe.setFavFood('melon');
    expect(giraffe.getFavFood()).toEqual('melon');
  });

  test('Monkey', () => {
    const monkey = new Monkey();
    monkey.setFavFood('banana');
    expect(monkey.getFavFood()).toEqual('banana');
  });
});
