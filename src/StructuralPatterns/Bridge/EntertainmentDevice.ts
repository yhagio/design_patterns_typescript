// Implementor
// With the Bridge Design Pattern you create 2 layers of abstraction
// In this example I'll have an abstract class representing
// different types of devices. I also have an abstract class
// that will represent different types of remote controls

// This allows me to use an infinite variety of devices and remotes

export default abstract class EntertainmentDevice {
  public deviceState: number;
  public maxSetting: number;
  public volumeLevel: number = 0;

  abstract buttonFivePressed(): string;

  abstract buttonSixPressed(): string;

  deviceFeedback(): string {
    if (this.deviceState > this.maxSetting || this.deviceState < 0) {
      this.deviceState = 0;
    }

    return 'On Channel ' + this.deviceState;
  }

  buttonSevenPressed() {
    this.volumeLevel++;

    return 'Volume at: ' + this.volumeLevel;
  }

  buttonEightPressed() {
    this.volumeLevel--;

    return 'Volume at: ' + this.volumeLevel;
  }
}
