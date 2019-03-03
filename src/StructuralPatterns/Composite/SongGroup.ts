import SongComponent from './SongComponent';

export default class SongGroup extends SongComponent {
  // Contains any Songs or SongGroups that are added
  // to this Array
  public songComponents: SongComponent[] = [];

  constructor(public groupName: string, public groupDescription: string) {
    super();
  }

  getGroupName(): string {
    return this.groupName;
  }
  getGroupDescription(): string {
    return this.groupDescription;
  }

  add(newSongComponent: SongComponent): void {
    this.songComponents.push(newSongComponent);
  }

  remove(newSongComponent: SongComponent): void {
    this.songComponents = this.songComponents.filter(
      c => c !== newSongComponent
    );
  }

  getComponent(componentIndex: number): SongComponent {
    return this.songComponents[componentIndex];
  }

  displaySongInfo(): string {
    let songs = '';
    this.songComponents.forEach(song => {
      songs += song.displaySongInfo();
    });
    return ` ${this.getGroupName()} ${this.getGroupDescription()} ${songs}`;
  }
}
