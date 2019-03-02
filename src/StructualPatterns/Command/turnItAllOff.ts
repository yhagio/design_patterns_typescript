import ICommand from '../ChainOfResponsibility/command';
import IElectronicDevice from './electronicDevice';

export default class TurnItAllOff implements ICommand {
  constructor(public theDevices: IElectronicDevice[]) {}

  execute(): string {
    let str = '';
    for (const device of this.theDevices) {
      str += device.off();
    }
    return str;
  }

  undo(): string {
    let str = '';
    for (const device of this.theDevices) {
      str += device.on();
    }
    return str;
  }
}
