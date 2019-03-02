import ICommand from './command';

// This is known as the invoker
// It has a method press() that when executed
// causes the execute method to be called

// The execute method for the Command interface then calls
// the method assigned in the class that implements the
// Command interface

export default class DeviceButton {
  constructor(public theCommand: ICommand) {}

  press(): string {
    return this.theCommand.execute();
  }

  // Now the remote can undo past commands
  pressUndo(): string {
    return this.theCommand.undo();
  }
}
