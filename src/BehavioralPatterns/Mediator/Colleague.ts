import IMediator from './Mediator';

export default abstract class Colleague {
  private colleagueCode: number;

  constructor(private mediator: IMediator) {
    mediator.addColleague(this);
  }

  saleOffer(stock: string, shares: number) {
    this.mediator.saleOffer(stock, shares, this.colleagueCode);
  }

  buyOffer(stock: string, shares: number) {
    this.mediator.buyOffer(stock, shares, this.colleagueCode);
  }

  setCollCode(collCode: number) {
    this.colleagueCode = collCode;
  }
}
