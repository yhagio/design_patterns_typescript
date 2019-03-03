import SongComponent from './SongComponent';

export default class Song extends SongComponent {
  constructor(
    public songName: string,
    public bandName: string,
    public releaseYear: number
  ) {
    super();
  }

  getSongName(): string {
    return this.songName;
  }
  getBandName(): string {
    return this.bandName;
  }
  getReleaseYear(): number {
    return this.releaseYear;
  }

  displaySongInfo(): string {
    return `${this.getSongName()} was recorded by ${this.getBandName()} in ${this.getReleaseYear()}`;
  }
}
