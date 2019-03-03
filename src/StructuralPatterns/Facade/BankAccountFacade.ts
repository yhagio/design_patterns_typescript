import AccountNumberCheck from './AccountNumberCheck';
import SecurityCodeCheck from './SecurityCodeCheck';
import FundsCheck from './FundsCheck';
import WelcomeToBank from './WelcomeToBank';

// The Facade Design Pattern decouples or separates the client
// from all of the sub components

// The Facades aim is to simplify interfaces so you don't have
// to worry about what is going on under the hood

export default class BankAccountFacade {
  public acctChecker: AccountNumberCheck;
  public codeChecker: SecurityCodeCheck;
  public fundChecker: FundsCheck;
  public bankWelcome: WelcomeToBank;

  constructor(private accountNumber: number, private securityCode: number) {
    this.bankWelcome = new WelcomeToBank();
    this.acctChecker = new AccountNumberCheck();
    this.codeChecker = new SecurityCodeCheck();
    this.fundChecker = new FundsCheck();
  }

  getAccountNumber(): number {
    return this.accountNumber;
  }

  getSecurityCode(): number {
    return this.securityCode;
  }

  withdrawCash(cashToGet: number): string {
    if (
      this.acctChecker.accountActive(this.getAccountNumber()) &&
      this.codeChecker.isCodeCorrect(this.getSecurityCode()) &&
      this.fundChecker.haveEnoughMoney(cashToGet)
    ) {
      return 'Transaction Complete';
    }
    return 'Transaction Failed';
  }

  depositCash(cashToDeposit: number): string {
    if (
      this.acctChecker.accountActive(this.getAccountNumber()) &&
      this.codeChecker.isCodeCorrect(this.getSecurityCode())
    ) {
      this.fundChecker.makeDeposit(cashToDeposit);

      return 'Transaction Complete';
    }

    return 'Transaction Failed';
  }
}
