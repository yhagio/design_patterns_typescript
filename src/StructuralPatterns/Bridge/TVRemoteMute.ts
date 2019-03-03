import RemoteButton from './RemoteButton';
import EntertainmentDevice from './EntertainmentDevice';

// Refined Abstraction

// If I decide I want to further extend the remote I can

export default class TVRemoteMute extends RemoteButton {
  constructor(theDevice: EntertainmentDevice) {
    super(theDevice);
  }

  buttonNinePressed(): string {
    return 'TV was Muted';
  }
}
