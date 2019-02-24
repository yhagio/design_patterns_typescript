import { ISubject } from './Subject';
import { IObserver } from './Observer';

export default class StockGrabber implements ISubject {
  private observers: IObserver[];
  private ibmPrice: number;
  private applePrice: number;
  private googlePrice: number;

  constructor() {
    this.observers = [];
  }

  register(observer: IObserver): void {
    this.observers.push(observer);
  }

  unregister(observer: IObserver): void {
    this.observers = this.observers.filter(item => item != observer);
  }

  notifyObserver(): void {
    for (const o of this.observers) {
      o.update(this.ibmPrice, this.applePrice, this.googlePrice);
    }
  }

  setIBMPrice(ibmPrice: number): void {
    this.ibmPrice = ibmPrice;
    this.notifyObserver();
  }

  setApplePrice(applePrice: number): void {
    this.applePrice = applePrice;
    this.notifyObserver();
  }

  setGooglePrice(googlePrice: number): void {
    this.googlePrice = googlePrice;
    this.notifyObserver();
  }
}
