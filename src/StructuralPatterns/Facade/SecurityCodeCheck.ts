export default class SecurityCodeCheck {
  private securityCode: number = 1234;

  getSecurityCode(): number {
    return this.securityCode;
  }

  isCodeCorrect(secCodeToCheck: number): boolean {
    if (secCodeToCheck === this.getSecurityCode()) {
      return true;
    }
    return false;
  }
}
