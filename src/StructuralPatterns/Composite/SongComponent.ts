// This acts as an interface for every Song (Leaf)
// and SongGroup (Composite) we create
export default abstract class SongComponent {
  // We throw Error so that if
  // it doesn't make sense for a song, or song group
  // to inherit a method they can just inherit the
  // default implementation

  // This allows me to add components
  add(_newSongComponent: SongComponent): void {
    throw new Error();
  }

  // This allows me to remove components
  remove(_newSongComponent: SongComponent): void {
    throw new Error();
  }

  // This allows me to get components
  getComponent(_componentIndex: number): SongComponent {
    throw new Error();
  }

  // This allows me to retrieve song names
  getSongName(): string {
    throw new Error();
  }

  // This allows me to retrieve band names
  getBandName(): string {
    throw new Error();
  }

  // This allows me to retrieve release year
  getReleaseYear(): number {
    throw new Error();
  }

  // When this is called by a class object that extends
  // SongComponent it will print out information
  // specific to the Song or SongGroup
  displaySongInfo(): string {
    throw new Error();
  }
}
