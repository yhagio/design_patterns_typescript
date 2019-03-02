import IElectronicDevice from './electronicDevice';

export default class Television implements IElectronicDevice {
  private volume: number = 0;

  on(): string {
    return 'TV is on';
  }

  off(): string {
    return 'TV is off';
  }

  volumeUp(): string {
    this.volume++;

    return `TV Volume is at: ${this.volume}`;
  }

  volumenDown(): string {
    this.volume--;

    return `TV Volume is at: ${this.volume}`;
  }
}
