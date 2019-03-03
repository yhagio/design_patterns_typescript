import IChain from './chain';
import Numbers from './Numbers';

export default class MultNumbers implements IChain {
  private nextInChain: IChain;

  setNextChain(nextChain: IChain): string | void {
    this.nextInChain = nextChain;
  }

  calculate(request: Numbers): string | void {
    if (request.getCalcWanted() === 'mult') {
      return (
        request.getNumber1() +
        ' * ' +
        request.getNumber2() +
        ' = ' +
        request.getNumber1() * request.getNumber2()
      );
    } else {
      return this.nextInChain.calculate(request);
    }
  }
}
