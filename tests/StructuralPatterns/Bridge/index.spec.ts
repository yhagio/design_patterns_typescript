import TVRemoteMute from '../../../src/StructuralPatterns/Bridge/TVRemoteMute';
import TVDevice from '../../../src/StructuralPatterns/Bridge/TvDevice';
import DVDRemote from '../../../src/StructuralPatterns/Bridge/DVDRemote';
import DVDDevice from '../../../src/StructuralPatterns/Bridge/DVDDevice';

describe('Bridge', () => {
  test('Test the remote', () => {
    const tv1 = new TVRemoteMute(new TVDevice(1, 200));
    const tv2 = new TVRemoteMute(new TVDevice(1, 200));
    const dvd = new DVDRemote(new DVDDevice(1, 14));

    expect(tv1.buttonFivePressed()).toEqual('Channel Down');
    expect(tv1.buttonSixPressed()).toEqual('Channel Up');
    expect(tv1.buttonSixPressed()).toEqual('Channel Up');
    expect(tv1.buttonNinePressed()).toEqual('TV was Muted');
    expect(tv1.deviceFeedback()).toEqual('On Channel 2');

    expect(tv2.buttonFivePressed()).toEqual('Channel Down');
    expect(tv2.buttonSixPressed()).toEqual('Channel Up');
    expect(tv2.buttonNinePressed()).toEqual('TV was Muted');
    expect(tv2.deviceFeedback()).toEqual('On Channel 1');

    expect(dvd.buttonFivePressed()).toEqual('DVD Skips to Chapter');
    expect(dvd.buttonSixPressed()).toEqual('DVD Skips to Next Chapter');
    expect(dvd.buttonNinePressed()).toEqual('DVD is Playing: false');
    expect(dvd.buttonNinePressed()).toEqual('DVD is Playing: true');
    expect(dvd.deviceFeedback()).toEqual('On Channel 1');
  });
});
