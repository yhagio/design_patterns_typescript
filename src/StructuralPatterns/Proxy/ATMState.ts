export default interface ATMState {
  insertCard(): string;
  ejectCard(): string;
  insertPin(pinEntered: number): string;
  requestCash(cashToWithdraw: number): string;
}
