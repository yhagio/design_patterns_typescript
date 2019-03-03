import IMediator from './Mediator';
import Colleague from './Colleague';
import StockOffer from './StockOffer';

export default class StockMediator implements IMediator {
  private colleagues: Colleague[];
  private stockBuyOffers: StockOffer[];
  private stockSaleOffers: StockOffer[];

  private colleagueCodes: number = 0;

  constructor() {
    this.colleagues = [];
    this.stockBuyOffers = [];
    this.stockSaleOffers = [];
  }

  addColleague(newColleague: Colleague) {
    this.colleagues.push(newColleague);

    this.colleagueCodes++;

    newColleague.setCollCode(this.colleagueCodes);
  }

  saleOffer(stock: string, shares: number, collCode: number) {
    let stockSold = false;

    for (const offer of this.stockBuyOffers) {
      if (
        offer.getStockSymbol() === stock &&
        offer.getstockShares() === shares
      ) {
        console.log(
          shares +
            ' shares of ' +
            stock +
            ' sold to colleague code ' +
            offer.getCollCode()
        );

        this.stockBuyOffers = this.stockBuyOffers.filter(o => o !== offer);

        stockSold = true;
      }

      if (stockSold) {
        break;
      }
    }

    if (!stockSold) {
      console.log(shares + ' shares of ' + stock + ' added to inventory');

      const newOffering = new StockOffer(shares, stock, collCode);

      this.stockSaleOffers.push(newOffering);
    }
  }

  buyOffer(stock: string, shares: number, collCode: number) {
    let stockBought = false;

    for (const offer of this.stockSaleOffers) {
      if (
        offer.getStockSymbol() === stock &&
        offer.getstockShares() === shares
      ) {
        console.log(
          shares +
            ' shares of ' +
            stock +
            ' bought by colleague code ' +
            offer.getCollCode()
        );

        this.stockSaleOffers = this.stockSaleOffers.filter(o => o !== offer);

        stockBought = true;
      }

      if (stockBought) {
        break;
      }
    }

    if (!stockBought) {
      console.log(shares + ' shares of ' + stock + ' added to inventory');

      const newOffering = new StockOffer(shares, stock, collCode);

      this.stockBuyOffers.push(newOffering);
    }
  }

  getstockOfferings(): string {
    let result = '';

    result += 'Stocks for Sale: ';
    for (const offer of this.stockSaleOffers) {
      result += `${offer.getstockShares()} of ${offer.getStockSymbol()}. `;
    }

    result += 'Stock Buy Offers: ';
    for (const offer of this.stockBuyOffers) {
      result += `${offer.getstockShares()} of ${offer.getStockSymbol()}. `;
    }

    return result;
  }
}
