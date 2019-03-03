import EntertainmentDevice from './EntertainmentDevice';

// Concrete Implementor

// Here is an implementation of the EntertainmentDevice
// abstract class. I'm specifying what makes it different
// from other devices

export default class DVDDevice extends EntertainmentDevice {
  constructor(deviceState: number, maxSetting: number) {
    super();
    super.deviceState = deviceState;
    super.maxSetting = maxSetting;
  }

  buttonFivePressed(): string {
    this.deviceState--;
    return 'DVD Skips to Chapter';
  }

  buttonSixPressed(): string {
    this.deviceState++;
    return 'DVD Skips to Next Chapter';
  }
}
