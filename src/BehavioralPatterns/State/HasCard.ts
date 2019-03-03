import ATMState from './ATMState';
import ATMMachine from './ATMMachine';

export default class HasCard implements ATMState {
  constructor(public atmMachine: ATMMachine) {}

  insertCard(): string {
    return 'You can only insert one card at a time';
  }

  ejectCard(): string {
    this.atmMachine.setATMState(this.atmMachine.getNoCardState());

    return 'Your card is ejected';
  }

  requestCash(_cashToWithdraw: number): string {
    return 'You have not entered your PIN';
  }

  insertPin(pinEntered: number): string {
    if (pinEntered === 1234) {
      this.atmMachine.correctPinEntered = true;
      this.atmMachine.setATMState(this.atmMachine.getHasPin());
      return 'You entered the correct PIN';
    }

    this.atmMachine.correctPinEntered = false;
    this.atmMachine.setATMState(this.atmMachine.getNoCardState());
    return 'You entered the wrong PIN. Your card is ejected';
  }
}
