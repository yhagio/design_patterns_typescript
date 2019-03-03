import Colleague from './Colleague';

export default interface IMediator {
  saleOffer(stock: string, shares: number, collCode: number): void;

  buyOffer(stock: string, shares: number, collCode: number): void;

  addColleague(colleague: Colleague): void;
}
