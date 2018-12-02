function interpret(channel, note, duration) {
    var noteArray = note;
    if (!Array.isArray(note)) {
        noteArray = [ note ]; 
    }
    let tones = noteArray.map(parse);
    return {
        channel: channel,
        notes: tones,
        duration: duration
    }
}

function parse(input) {
    let firstNumber = input.search('[0-9]')
    let parsedNote = input.substring(0,firstNumber); 
    let parsedOctave = parseInt(input.substring(firstNumber,input.length)); 
    return {
        note: parsedNote,
        octave: parsedOctave,
        toMidi: function() {
            return this.note + this.octave;
        }
    }
}

function shiftOctaveUp(note, num) {
    shiftOctave(note, num);
}

function shiftOctaveDown(note, num) {
    shiftOctave(note, num * -1);
}

function shiftOctave(note, numOctaves) {
    note.notes.forEach(function(singleNote){
        singleNote.octave = singleNote.octave + numOctaves;
    });
}

function halfStepUp(note, num) {
    shiftKey(note, num)
}

function halfStepDown(note, num) {
    shiftKey(note, num * -1)
}

function wholeStepUp(note, num) {
    shiftKey(note, num * 2)
}

function wholeStepDown(note, num) {
    shiftKey(note, num * -2)
}

let notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']

function shiftKey(note, numHalfSteps) {
    note.notes.forEach(function(singleNote) {
        shiftSingleKey(singleNote, numHalfSteps);
    });
}

function shiftSingleKey(note, numHalfSteps) {
    let index = notes.indexOf(note.note);
    var nextIndex = index + numHalfSteps;
    var octaveShifts = 0;
    if (nextIndex >= notes.length) {
        nextIndex -= notes.length;
        octaveShifts += 1;
    } else if (nextIndex < 0) {
        nextIndex += notes.length;
        octaveShifts -= 1;
    }
    note.note = notes[nextIndex];
    note.octave = note.octave + octaveShifts;
}

module.exports = {
    interpret: interpret,
    shiftOctaveUp: shiftOctaveUp,
    shiftOctaveDown: shiftOctaveDown,
    halfStepUp: halfStepUp,
    halfStepDown: halfStepDown,
    wholeStepUp: wholeStepUp,
    wholeStepDown: wholeStepDown
}
