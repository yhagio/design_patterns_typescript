import { IObserver } from './Observer';
import { ISubject } from './Subject';

export default class StockObserver implements IObserver {
  private ibmPrice: number;
  private googlePrice: number;
  private applePrice: number;

  static observerIDTracker: number = 0;
  private observerID: number;
  private stockGrabber: ISubject;

  update(ibmPrice: number, applePrice: number, googlePrice: number): void {
    this.ibmPrice = ibmPrice;
    this.applePrice = applePrice;
    this.googlePrice = googlePrice;
  }

  constructor(stockGrabber: ISubject) {
    StockObserver.observerIDTracker++;

    this.stockGrabber = stockGrabber;
    this.observerID = StockObserver.observerIDTracker;

    this.stockGrabber.register(this);
  }

  printPrices(): string {
    return `ObserverID: ${this.observerID}. IBM: ${this.ibmPrice}. Apple: ${
      this.applePrice
    }. Google: ${this.googlePrice}`;
  }
}
