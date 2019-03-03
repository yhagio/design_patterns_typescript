import SongGroup from '../../../src/StructuralPatterns/Composite/SongGroup';
import Song from '../../../src/StructuralPatterns/Composite/Song';
import DJ from '../../../src/StructuralPatterns/Composite/DJ';

describe('Composite', () => {
  test('Song list generation', () => {
    const hiphop = new SongGroup('HipHop', 'is a street rhyming music');
    const edm = new SongGroup('EDM', 'is an electronic dance music');

    // Top level component that holds everything
    const everySong = new SongGroup('Song List', 'Every Song Available');

    // Composite that holds individual groups of songs
    // This holds Songs plus a SongGroup with Songs
    everySong.add(hiphop);
    hiphop.add(new Song('Party up', 'DMX', 2000));

    everySong.add(edm);
    edm.add(new Song('Take over control', 'Afrojack', 2010));

    const dj = new DJ(everySong);
    expect(dj.getSongList()).toEqual(
      ' Song List Every Song Available  HipHop is a street rhyming music Party up was recorded by DMX in 2000 EDM is an electronic dance music Take over control was recorded by Afrojack in 2010'
    );
  });
});
