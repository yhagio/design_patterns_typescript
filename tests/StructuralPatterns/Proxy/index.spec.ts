import RealATMMachine from '../../../src/StructuralPatterns/Proxy/ATMMachine';
import ATMProxy from '../../../src/StructuralPatterns/Proxy/ATMProxy';

describe('Proxy', () => {
  test('Test ATM Machine', () => {
    // The interface limits access to just the methods you want
    // made accessible

    // The user can't perform this action because ATMProxy doesn't
    // have access to that potentially harmful method
    // atmProxy.setCashInMachine(10000);

    const realAtm = new RealATMMachine();
    const atmProxy = new ATMProxy();

    expect(atmProxy.getATMState()).toEqual(realAtm.noCard);

    expect(atmProxy.getCashInMachine()).toEqual(2000);
  });
});
