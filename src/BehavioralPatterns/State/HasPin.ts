import ATMState from './ATMState';
import ATMMachine from './ATMMachine';

export default class HasPin implements ATMState {
  constructor(public atmMachine: ATMMachine) {}

  insertCard() {
    return 'You already entered a card';
  }

  ejectCard() {
    this.atmMachine.setATMState(this.atmMachine.getNoCardState());
    return 'Your card is ejected';
  }

  requestCash(cashToWithdraw: number): string {
    if (cashToWithdraw > this.atmMachine.cashInMachine) {
      this.atmMachine.setATMState(this.atmMachine.getNoCardState());
      return "You don't have that much cash available. Your card is ejected";
    }

    this.atmMachine.setCashInMachine(
      this.atmMachine.cashInMachine - cashToWithdraw
    );

    this.atmMachine.setATMState(this.atmMachine.getNoCardState());

    if (this.atmMachine.cashInMachine <= 0) {
      this.atmMachine.setATMState(this.atmMachine.getNoCashState());
    }
    return cashToWithdraw + ' is provided by the machine. Your card is ejected';
  }

  insertPin(_pinEntered: number) {
    return 'You already entered a PIN';
  }
}
