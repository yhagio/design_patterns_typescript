import ATMMachine from '../../../src/BehavioralPatterns/State/ATMMachine';

describe('State', () => {
  test('Test ATM Machine', () => {
    const atm = new ATMMachine();

    expect(atm.insertCard()).toEqual('Please enter your pin');
    expect(atm.ejectCard()).toEqual('Your card is ejected');

    atm.insertCard();
    expect(atm.insertPin(1111)).toEqual(
      'You entered the wrong PIN. Your card is ejected'
    );

    atm.insertCard();

    expect(atm.insertPin(1234)).toEqual('You entered the correct PIN');
    expect(atm.requestCash(1000)).toEqual(
      '1000 is provided by the machine. Your card is ejected'
    );

    atm.insertCard();
    atm.insertPin(1234);
    atm.requestCash(1000);

    expect(atm.requestCash(1000)).toEqual("We don't have any money");
  });
});
