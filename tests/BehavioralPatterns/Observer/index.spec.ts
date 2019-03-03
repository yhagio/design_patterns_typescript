import StockGrabber from '../../../src/BehavioralPatterns/Observer/StockGrabber';
import StockObserver from '../../../src/BehavioralPatterns/Observer/StockObserver';

describe('Observer', () => {
  test('Stock price observer', () => {
    const stockGrabber = new StockGrabber();
    const observer1 = new StockObserver(stockGrabber);
    stockGrabber.setIBMPrice(10);
    stockGrabber.setApplePrice(11);
    stockGrabber.setGooglePrice(12);

    expect(observer1.printPrices()).toEqual(
      'ObserverID: 1. IBM: 10. Apple: 11. Google: 12'
    );

    const observer2 = new StockObserver(stockGrabber);
    stockGrabber.setIBMPrice(15);
    stockGrabber.setApplePrice(16);
    stockGrabber.setGooglePrice(17);

    expect(observer1.printPrices()).toEqual(
      'ObserverID: 1. IBM: 15. Apple: 16. Google: 17'
    );

    expect(observer2.printPrices()).toEqual(
      'ObserverID: 2. IBM: 15. Apple: 16. Google: 17'
    );

    stockGrabber.unregister(observer1);

    stockGrabber.setIBMPrice(20);
    stockGrabber.setApplePrice(21);
    stockGrabber.setGooglePrice(22);

    expect(observer1.printPrices()).toEqual(
      'ObserverID: 1. IBM: 15. Apple: 16. Google: 17'
    );

    expect(observer2.printPrices()).toEqual(
      'ObserverID: 2. IBM: 20. Apple: 21. Google: 22'
    );
  });
});
