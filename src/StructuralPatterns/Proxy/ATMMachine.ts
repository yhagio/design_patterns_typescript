import ATMState from './ATMState';
import GetATMData from './GetATMData';

export default class ATMMachine implements GetATMData {
  public hasCard: ATMState;
  public noCard: ATMState;
  public hasCorrectPin: ATMState;
  public atmOutOfMoney: ATMState;
  public atmState: ATMState;
  public cashInMachine: number;

  constructor() {
    // this.hasCard = new HasCard();
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

  // NEW STUFF

  getATMState(): ATMState {
    return this.atmState;
  }
  getCashInMachine(): number {
    return this.cashInMachine;
  }
}
