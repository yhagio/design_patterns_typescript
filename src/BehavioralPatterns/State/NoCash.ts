import ATMState from './ATMState';
import ATMMachine from './ATMMachine';

export default class NoCash implements ATMState {
  constructor(public atmMachine: ATMMachine) {}

  insertCard(): string {
    return "We don't have any money. Your card is ejected";
  }

  ejectCard(): string {
    return "We don't have any money. There is no card to eject";
  }

  requestCash(_cashToWithdraw: number): string {
    return "We don't have any money";
  }

  insertPin(_pinEntered: number): string {
    return "We don't have any money";
  }
}
