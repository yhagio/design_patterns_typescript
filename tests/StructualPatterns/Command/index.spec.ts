import TVRemote from '../../../src/StructualPatterns/Command/tvRemote';
import TurnTVOn from '../../../src/StructualPatterns/Command/turnTVon';
import DeviceButton from '../../../src/StructualPatterns/Command/deviceButton';
import TurnTVOff from '../../../src/StructualPatterns/Command/turnTVoff';
import TurnTVUp from '../../../src/StructualPatterns/Command/turnTVUp';
import Television from '../../../src/StructualPatterns/Command/television';
import Radio from '../../../src/StructualPatterns/Command/radio';
import IElectronicDevice from '../../../src/StructualPatterns/Command/electronicDevice';
import TurnItAllOff from '../../../src/StructualPatterns/Command/turnItAllOff';

describe('Command', () => {
  test('Play with remote', () => {
    // Gets the ElectronicDevice to use
    const newDevice = TVRemote.getDevice();
    // TurnTVOn contains the command to turn on the tv
    // When execute() is called on this command object
    // it will execute the method on() in Television
    const onCommand = new TurnTVOn(newDevice);
    // Calling the execute() causes on() to execute in Television
    const onPressed = new DeviceButton(onCommand);
    // When press() is called theCommand.execute(); executes
    expect(onPressed.press()).toEqual('TV is on');

    //----------------------------------------------------------

    // Now when execute() is called off() of Television executes
    const offCommand = new TurnTVOff(newDevice);
    // Calling the execute() causes off() to execute in Television
    const onPressed2 = new DeviceButton(offCommand);
    // When press() is called theCommand.execute(); executes
    expect(onPressed2.press()).toEqual('TV is off');

    //----------------------------------------------------------

    // Now when execute() is called volumeUp() of Television executes
    const volUpCommand = new TurnTVUp(newDevice);
    // Calling the execute() causes volumeUp() to execute in Television
    const onPressed3 = new DeviceButton(volUpCommand);
    // When press() is called theCommand.execute(); executes
    expect(onPressed3.press()).toEqual('TV Volume is at: 1');
    expect(onPressed3.press()).toEqual('TV Volume is at: 2');
    expect(onPressed3.press()).toEqual('TV Volume is at: 3');

    //----------------------------------------------------------

    // Creating a TV and Radio to turn off with 1 press
    const theTV = new Television();
    const theRadio = new Radio();
    // Add the Electronic Devices to a List
    const allDevices: IElectronicDevice[] = [];

    allDevices.push(theTV);
    allDevices.push(theRadio);

    // Send the List of Electronic Devices to TurnItAllOff
    // where a call to run execute() on this function will
    // call off() for each device in the list
    const turnOffDevices = new TurnItAllOff(allDevices);

    // This calls for execute() to run which calls for off() to
    // run for every ElectronicDevice
    const turnThemOff = new DeviceButton(turnOffDevices);
    expect(turnThemOff.press()).toEqual('TV is offRadio is off');

    //----------------------------------------------------------

    /*
     * It is common to be able to undo a command in a command pattern
     * To do so, DeviceButton will have a method called undo
     * Undo() will perform the opposite action that the normal
     * Command performs. undo() needs to be added to every class
     * with an execute()
     */

    expect(turnThemOff.pressUndo()).toEqual('TV is onRadio is on');

    // To undo more than one command add them to a LinkedList
    // using addFirst(). Then execute undo on each item until
    // there are none left. (This is your Homework)
  });
});
