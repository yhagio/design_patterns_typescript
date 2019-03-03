import GetATMData from './GetATMData';
import ATMState from './ATMState';
import ATMMachine from './ATMMachine';

// In this situation the proxy both creates and destroys
// an ATMMachine Object

export default class ATMProxy implements GetATMData {
  // Allows the user to access getATMState in the
  // Object ATMMachine
  getATMState(): ATMState {
    const realATMMachine: ATMMachine = new ATMMachine();

    return realATMMachine.getATMState();
  }

  // Allows the user to access getCashInMachine
  // in the Object ATMMachine
  getCashInMachine(): number {
    const realATMMachine: ATMMachine = new ATMMachine();

    return realATMMachine.getCashInMachine();
  }
}
