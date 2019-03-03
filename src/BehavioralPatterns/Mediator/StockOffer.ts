export default class StockOffer {
  constructor(
    private stockShares: number = 0,
    private stockSymbol: string = '',
    private colleagueCode: number = 0
  ) {}

  getstockShares(): number {
    return this.stockShares;
  }
  getStockSymbol(): string {
    return this.stockSymbol;
  }
  getCollCode(): number {
    return this.colleagueCode;
  }
}
