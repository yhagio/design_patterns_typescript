import SongComponent from './SongComponent';

export default class DJ {
  // newSongList contains every Song, SongGroup,
  // and any Songs saved in SongGroups
  constructor(public songList: SongComponent) {}

  // Calls the displaySongInfo() on every Song
  // or SongGroup stored in songList
  getSongList(): string {
    return this.songList.displaySongInfo();
  }
}
