import ICommand from '../ChainOfResponsibility/command';
import IElectronicDevice from './electronicDevice';

export default class TurnTVUp implements ICommand {
  constructor(public theDevice: IElectronicDevice) {}

  execute(): string {
    return this.theDevice.volumeUp();
  }

  undo(): string {
    return this.theDevice.volumenDown();
  }
}
