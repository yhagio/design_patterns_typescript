import ATMState from './ATMState';
import ATMMachine from './ATMMachine';

export default class NoCard implements ATMState {
  constructor(public atmMachine: ATMMachine) {}

  insertCard(): string {
    this.atmMachine.setATMState(this.atmMachine.getYesCardState());
    return 'Please enter your pin';
  }

  ejectCard(): string {
    return "You didn't enter a card";
  }

  requestCash(_cashToWithdraw: number): string {
    return 'You have not entered your card';
  }

  insertPin(_pinEntered: number): string {
    return 'You have not entered your card';
  }
}
