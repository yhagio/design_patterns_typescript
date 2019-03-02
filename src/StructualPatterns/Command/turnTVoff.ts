import ICommand from '../ChainOfResponsibility/command';
import IElectronicDevice from './electronicDevice';

export default class TurnTVOff implements ICommand {
  constructor(public theDevice: IElectronicDevice) {}

  execute(): string {
    return this.theDevice.off();
  }

  undo(): string {
    return this.theDevice.on();
  }
}
