let noteCreator = require('./noteCreator');

var fs = require('fs');
var Midi = require('jsmidgen');

var file = new Midi.File();
let rightHand = new Midi.Track();
let leftHand = new Midi.Track();
let metronome = new Midi.Track();
let TEMPO = 40;
rightHand.setTempo(TEMPO);
leftHand.setTempo(TEMPO);
metronome.setTempo(TEMPO);
metronome.setInstrument(1, '115')

function main() {
    let left = makeWrapper();
    let right = makeWrapper();
    let metro = makeWrapper();
    let tracks = {
        left: left,
        right: right,
        metro: metronome
    };

    require('./testLine2').init(tracks).addLine();

    function applyNotes(wrapper, track) {
        wrapper.notes.forEach(function (note) {
            track.addChord(note.track, note.notes.map(singleNote => singleNote.toMidi()), note.duration);
        })
    }

    let modify = function(note) {
        noteCreator.halfStepUp(note, 3);
        noteCreator.shiftOctaveDown(note, 1);
    }
    left.notes.forEach(modify);
    right.notes.forEach(modify);
    
    applyNotes(left, leftHand);
    applyNotes(right, rightHand);
    // applyNotes(metro, metronome);

    file.addTrack(rightHand);
    file.addTrack(leftHand);
    file.addTrack(metronome);

    fs.writeFileSync('test.mid', file.toBytes(), 'binary');
}

function makeWrapper() {
    let list = [];
    let addNote = function(track, tone, duration) {
        list.push(noteCreator.interpret(track, tone, duration));
        return this;
    }
    return {
        notes: list,
        note: addNote,
        addNote: addNote,
        addChord: addNote
    }
}

main();
