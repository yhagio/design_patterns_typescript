import ICommand from '../ChainOfResponsibility/command';
import IElectronicDevice from './electronicDevice';

export default class TurnTVOn implements ICommand {
  constructor(public theDevice: IElectronicDevice) {}

  execute(): string {
    return this.theDevice.on();
  }

  undo(): string {
    return this.theDevice.off();
  }
}
