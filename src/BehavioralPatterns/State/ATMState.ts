export default interface ATMState {
  // Different states expected
  // HasCard, NoCard, HasPin, NoCash
  insertCard(): string;
  ejectCard(): string;
  insertPin(pinEntered: number): string;
  requestCash(cashToWithdraw: number): string;
}
