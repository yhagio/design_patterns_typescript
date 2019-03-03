import StockMediator from '../../../src/BehavioralPatterns/Mediator/StockMediator';
import GormanSlacks from '../../../src/BehavioralPatterns/Mediator/GormanSlacks';
import JPPoorman from '../../../src/BehavioralPatterns/Mediator/JTPoorman';

describe('Mediator', () => {
  test('Test Stock Mediator', () => {
    const NYSE = new StockMediator();
    const broker1 = new GormanSlacks(NYSE);
    const broker2 = new JPPoorman(NYSE);

    broker1.saleOffer('MSFT', 100);
    broker1.saleOffer('GOOG', 50);

    expect(NYSE.getstockOfferings()).toEqual(
      'Stocks for Sale: 100 of MSFT. 50 of GOOG. Stock Buy Offers: '
    );

    broker2.buyOffer('MSFT', 100);

    expect(NYSE.getstockOfferings()).toEqual(
      'Stocks for Sale: 50 of GOOG. Stock Buy Offers: '
    );

    broker2.saleOffer('NRG', 10);
    broker1.buyOffer('NRG', 10);

    expect(NYSE.getstockOfferings()).toEqual(
      'Stocks for Sale: 50 of GOOG. Stock Buy Offers: '
    );
  });
});
