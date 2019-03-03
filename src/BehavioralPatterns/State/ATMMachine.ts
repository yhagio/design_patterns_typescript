import ATMState from './ATMState';
import HasCard from './HasCard';
import NoCard from './NoCard';
import HasPin from './HasPin';
import NoCash from './NoCash';

export default class ATMMachine {
  public hasCard: ATMState;
  public noCard: ATMState;
  public hasCorrectPin: ATMState;
  public atmOutOfMoney: ATMState;
  public atmState: ATMState;

  public cashInMachine: number = 2000;
  public correctPinEntered: boolean = false;

  constructor() {
    this.hasCard = new HasCard(this);
    this.noCard = new NoCard(this);
    this.hasCorrectPin = new HasPin(this);
    this.atmOutOfMoney = new NoCash(this);

    this.atmState = this.noCard;

    if (this.cashInMachine < 0) {
      this.atmState = this.atmOutOfMoney;
    }
  }

  setATMState(newATMState: ATMState): void {
    this.atmState = newATMState;
  }

  setCashInMachine(newCashInMachine: number) {
    this.cashInMachine = newCashInMachine;
  }

  insertCard(): string {
    return this.atmState.insertCard();
  }

  ejectCard(): string {
    return this.atmState.ejectCard();
  }

  requestCash(cashToWithdraw: number): string {
    return this.atmState.requestCash(cashToWithdraw);
  }

  insertPin(pinEntered: number): string {
    return this.atmState.insertPin(pinEntered);
  }

  getYesCardState(): ATMState {
    return this.hasCard;
  }
  getNoCardState(): ATMState {
    return this.noCard;
  }
  getHasPin(): ATMState {
    return this.hasCorrectPin;
  }
  getNoCashState(): ATMState {
    return this.atmOutOfMoney;
  }
}
