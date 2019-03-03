import IElectronicDevice from './electronicDevice';

export default class Radio implements IElectronicDevice {
  private volume: number = 0;

  on(): string {
    return 'Radio is on';
  }

  off(): string {
    return 'Radio is off';
  }

  volumeUp(): string {
    this.volume++;

    return `Radio Volume is at: ${this.volume}`;
  }

  volumenDown(): string {
    this.volume--;

    return `Radio Volume is at: ${this.volume}`;
  }
}
