import EntertainmentDevice from './EntertainmentDevice';

// Abstraction

// This is an abstract class that will represent numerous
// ways to work with each device

export default abstract class RemoteButton {
  // A reference to a generic device using aggregation

  constructor(private theDevice: EntertainmentDevice) {}

  buttonFivePressed(): string {
    return this.theDevice.buttonFivePressed();
  }

  buttonSixPressed(): string {
    return this.theDevice.buttonSixPressed();
  }

  deviceFeedback(): string {
    return this.theDevice.deviceFeedback();
  }

  public abstract buttonNinePressed(): string;
}
