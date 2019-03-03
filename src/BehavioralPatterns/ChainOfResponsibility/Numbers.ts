// This object will contain 2 numbers and a
// calculation to perform in the form of a String

export default class Numbers {
  constructor(
    private number1: number,
    private number2: number,
    private calculationWanted: string
  ) {}

  getNumber1(): number {
    return this.number1;
  }
  getNumber2(): number {
    return this.number2;
  }
  getCalcWanted(): string {
    return this.calculationWanted;
  }
}
