var fs = require('fs');
var Midi = require('jsmidgen');

var file = new Midi.File();
let rightHand = new Midi.Track();
let leftHand = new Midi.Track();
let thirdVoice = new Midi.Track();
let metronome = new Midi.Track();
let TEMPO = 40;
rightHand.setTempo(TEMPO);
leftHand.setTempo(TEMPO);
thirdVoice.setTempo(TEMPO);
metronome.setTempo(TEMPO);

metronome.setInstrument(1, '115')

let tracks = {
    left: leftHand,
    right: rightHand,
    third: thirdVoice,
    metro: metronome
}

require('./line0.js').init(tracks).addLine();
require('./line1.js').init(tracks).addLine();
require('./line2.js').init(tracks).addLine();
require('./line3.js').init(tracks).addLine();
// require('./line4.js').init(tracks).addLine();
// require('./line5.js').init(tracks).addLine();
// require('./line6.js').init(tracks).addLine();
// require('./line7.js').init(tracks).addLine();
// require('./line8.js').init(tracks).addLine();

file.addTrack(rightHand);
// file.addTrack(leftHand);
// file.addTrack(thirdVoice);
file.addTrack(metronome);

fs.writeFileSync('test.mid', file.toBytes(), 'binary');
