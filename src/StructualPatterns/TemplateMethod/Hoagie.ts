// A Template Method Pattern contains a method that provides
// the steps of the algorithm. It allows subclasses to override
// some of the methods

export default abstract class Hoagie {
  // This is the Template Method
  // Declare this method final to keep subclasses from
  // changing the algorithm
  makeSandwich(): string {
    let str = '';

    str += this.cutBun();

    if (this.customerWantsMeat()) {
      str += this.addMeat();
    }

    if (this.customerWantsCheese()) {
      str += this.addCheese();
    }

    if (this.customerWantsVegetables()) {
      str += this.addVegetables();
    }

    if (this.customerWantsCondiments()) {
      str += this.addCondiments();
    }

    return `${this.wrapTheHoagie()}: ${str}`;
  }

  // These methods must be overridden by the extending subclasses

  abstract addMeat(): string;
  abstract addCheese(): string;
  abstract addVegetables(): string;
  abstract addCondiments(): string;

  cutBun(): string {
    return 'The Hoagie is Cut. ';
  }

  // These are called hooks
  // If the user wants to override these they can

  // Use abstract methods when you want to force the user
  // to override and use a hook when you want it to be optional

  customerWantsMeat(): boolean {
    return true;
  }
  customerWantsCheese(): boolean {
    return true;
  }
  customerWantsVegetables(): boolean {
    return true;
  }
  customerWantsCondiments(): boolean {
    return true;
  }

  wrapTheHoagie(): string {
    return 'Wrap the Hoagie';
  }
}
