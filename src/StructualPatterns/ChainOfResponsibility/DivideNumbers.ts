import IChain from './chain';
import Numbers from './Numbers';

export default class DivideNumbers implements IChain {
  private nextInChain: IChain;

  setNextChain(nextChain: IChain): string | void {
    this.nextInChain = nextChain;
  }

  calculate(request: Numbers): string | void {
    if (request.getCalcWanted() === 'div') {
      return (
        request.getNumber1() +
        ' / ' +
        request.getNumber2() +
        ' = ' +
        request.getNumber1() / request.getNumber2()
      );
    } else {
      return this.nextInChain.calculate(request);
    }
  }
}
