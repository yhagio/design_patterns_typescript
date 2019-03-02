import RemoteButton from './RemoteButton';
import EntertainmentDevice from './EntertainmentDevice';

// Refined Abstraction

// If I decide I want to further extend the remote I can

export default class DVDRemote extends RemoteButton {
  private play: boolean = true;

  constructor(theDevice: EntertainmentDevice) {
    super(theDevice);
  }

  buttonNinePressed(): string {
    this.play = !this.play;

    return `DVD is Playing: ${this.play}`;
  }
}
