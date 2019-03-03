export default class AccountNumberCheck {
  private accountNumber: number = 12345678;

  getAccountNumber(): number {
    return this.accountNumber;
  }

  accountActive(acctNumToCheck: number): boolean {
    if (acctNumToCheck === this.getAccountNumber()) {
      return true;
    }
    return false;
  }
}
