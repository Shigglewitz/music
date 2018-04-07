let metronome = require('./metroConstants.js');

var exports = module.exports = {}

var leftHand;
var rightHand;
var metro;

exports.init = function(tracks) {
    leftHand = tracks.left;
    rightHand = tracks.right;
    metro = tracks.metro;
    return this;
}

exports.addBar = addBar;

exports.addLine = function() {
    addBar(1);
    addBar(2);
    addBar(3);
    addBar(4);
    return this;
};

function addBar(barNumber) {
    switch (barNumber) {
        case 1:
            firstBar();
            break;
        case 2:
            secondBar();
            break;
        case 3:
            thirdBar();
            break;
        case 4:
            fourthBar();
            break;
        default:
            console.log('invalid bar number')
    }
    return this;
}

function firstBar() {
    rightHand
        .note(0, 'a5', 32)
        .note(0, 'g#5', 32)
        .note(0, 'a5', 32)
        .note(0, 'g#5', 32)
        .note(0, 'a5', 32)
        .note(0, 'e5', 32)
        .note(0, 'a5', 32)
        .addNoteOn(0, 'd5')

    leftHand
        .note(0, 'f#3', 32)
        .note(0, 'c#4', 32)
        .note(0, 'f#4', 64)
        .note(0, 'd3', 32)
        .note(0, 'a3', 32)
        .addNoteOn(0, 'e4')

    metronome.metronomeBar(metro);
}

function secondBar() {
    rightHand
        .addNoteOff(0, 'd5', 32 + 3 * 64 + 32)
        .note(0, 'a4', 16)
        .note(0, 'c#5', 16)

    leftHand
        .addNoteOff(0, 'e4', 64 * 5)

    metronome.metronomeBar(metro);
}

function thirdBar() {
    rightHand
        .note(0, 'a5', 32)
        .note(0, 'g#5', 32)
        .note(0, 'a5', 32)
        .note(0, 'g#5', 32)
        .note(0, 'a5', 32)
        .note(0, 'e5', 32)
        .note(0, 'a5', 32)
        .addNoteOn(0, 'd5')

    leftHand
        .note(0, 'f#3', 32)
        .note(0, 'c#4', 32)
        .note(0, 'f#4', 64)
        .note(0, 'd3', 32)
        .note(0, 'a3', 32)
        .addNoteOn(0, 'e4')

    metronome.metronomeBar(metro);
}

function fourthBar() {
    rightHand
        .addNoteOff(0, 'd5', 32 + 3 * 64 + 32)
        .note(0, 'a4', 16)
        .note(0, 'c#5', 16)

    leftHand
        .addNoteOff(0, 'e4', 64 * 5)

    metronome.metronomeBar(metro);
}