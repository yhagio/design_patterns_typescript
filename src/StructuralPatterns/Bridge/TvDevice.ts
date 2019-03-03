import EntertainmentDevice from './EntertainmentDevice';

// Concrete Implementor

// Here is an implementation of the EntertainmentDevice
// abstract class. I'm specifying what makes it different
// from other devices

export default class TVDevice extends EntertainmentDevice {
  constructor(public deviceState: number, public maxSetting: number) {
    super();
  }

  buttonFivePressed(): string {
    this.deviceState--;
    return 'Channel Down';
  }

  buttonSixPressed(): string {
    this.deviceState++;
    return 'Channel Up';
  }
}
