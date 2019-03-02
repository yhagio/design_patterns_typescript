// Each command you want to issue will implement
// the Command interface
export default interface ICommand {
  execute(): string;
  // You may want to offer the option to undo a command
  undo(): string;
}
