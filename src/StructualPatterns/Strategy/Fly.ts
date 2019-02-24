export interface IFly {
  fly(): string;
}

export class Fly implements IFly {
  fly(): string {
    return 'Fly';
  }
}

export class CantFly implements IFly {
  fly(): string {
    return 'Cant fly';
  }
}
