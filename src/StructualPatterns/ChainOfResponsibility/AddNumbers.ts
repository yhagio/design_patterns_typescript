import IChain from './chain';
import Numbers from './Numbers';

export default class AddNumbers implements IChain {
  private nextInChain: IChain;

  // Defines the next Object to receive the
  // data if this one can't use it
  setNextChain(nextChain: IChain): string | void {
    this.nextInChain = nextChain;
  }

  // Tries to calculate the data, or passes it
  // to the Object defined in method setNextChain()
  calculate(request: Numbers): string | void {
    if (request.getCalcWanted() === 'add') {
      return (
        request.getNumber1() +
        ' + ' +
        request.getNumber2() +
        ' = ' +
        (request.getNumber1() + request.getNumber2())
      );
    } else {
      return this.nextInChain.calculate(request);
    }
  }
}
