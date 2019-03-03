import ATMState from './ATMState';

// This interface will contain just those methods
// that you want the proxy to provide access to

export default interface GetATMData {
  getATMState(): ATMState;
  getCashInMachine(): number;
}
