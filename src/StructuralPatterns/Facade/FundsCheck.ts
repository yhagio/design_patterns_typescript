export default class FundsCheck {
  private cashInAccount: number = 1000.0;

  getCashInAccount(): number {
    return this.cashInAccount;
  }

  decreaseCashInAccount(cashWithdrawn: number): number {
    return (this.cashInAccount -= cashWithdrawn);
  }

  increaseCashInAccount(cashDeposited: number): number {
    return (this.cashInAccount += cashDeposited);
  }

  haveEnoughMoney(cashToWithdrawal: number): boolean {
    if (cashToWithdrawal > this.getCashInAccount()) {
      return false;
    }

    this.decreaseCashInAccount(cashToWithdrawal);

    return true;
  }

  makeDeposit(cashToDeposit: number): string {
    this.increaseCashInAccount(cashToDeposit);

    return `Deposit Complete: Current Balance is ${this.getCashInAccount()}`;
  }
}
