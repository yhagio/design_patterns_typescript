import IElectronicDevice from './electronicDevice';
import Television from './television';

export default class TVRemote {
  static getDevice(): IElectronicDevice {
    return new Television();
  }
}
