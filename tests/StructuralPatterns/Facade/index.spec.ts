import BankAccountFacade from '../../../src/StructuralPatterns/Facade/BankAccountFacade';

describe('Facade', () => {
  test('Test Bank Account', () => {
    const accessingBank = new BankAccountFacade(12345678, 1234);

    expect(accessingBank.withdrawCash(500)).toEqual('Transaction Complete');
    expect(accessingBank.withdrawCash(501)).toEqual('Transaction Failed');
  });
});
