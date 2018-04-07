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
        default:
            console.log('invalid bar number')
    }
    return this;
}

function firstBar() {
    rightHand
        .addChord(0, ['a5', 'e5'], 64 + 32)
        .note(0, 'a4', 16)
        .note(0, 'b4', 16)
        .note(0, 'c#5', 32)
        .note(0, 'e4', 32)
        .note(0, 'a4', 32)
        .note(0, 'c#5', 16)
        .note(0, 'd5', 16)

    leftHand
        .note(0, 'f#3', 32)
        .note(0, 'c#4', 32)
        .note(0, 'f#4', 64)
        .note(0, 'd3', 32)
        .note(0, 'a3', 32)
        .note(0, 'e4', 64)

    metronome.metronomeBar(metro)
}

function secondBar() {
    rightHand
        .note(0, 'e5', 32)
        .note(0, 'e4', 32)
        .note(0, 'c#5', 32)
        .note(0, 'd5', 16)
        .note(0, 'c#5', 16)
        .note(0, 'b4', 64)
        .note(0, 'a5', 16)
        .note(0, 'b5', 16)
        .note(0, 'a5', 16)
        .note(0, 'g#5', 16)

    leftHand
        .note(0, 'a2', 32)
        .note(0, 'e3', 32)
        .note(0, 'c#4', 64)
        .note(0, 'e3', 32)
        .note(0, 'b3', 32)
        .note(0, 'e4', 64)

    metronome.metronomeBar(metro)
};

function thirdBar() {
    rightHand
        .note(0, 'a5', 16)
        .note(0, 'a4', 16)
        .note(0, 'e5', 16)
        .note(0, 'a4', 16)
        .note(0, 'a5', 16)
        .note(0, 'b5', 16)
        .note(0, 'a5', 16)
        .note(0, 'g#5', 16)
        .note(0, 'a5', 16)
        .note(0, 'a4', 16)
        .note(0, 'e5', 16)
        .note(0, 'a4', 16)
        .note(0, 'a5', 16)
        .note(0, 'b5', 16)
        .note(0, 'a5', 16)
        .note(0, 'g#5', 16)
    
    leftHand
        .note(0, 'f#3', 32)
        .note(0, 'c#4', 32)
        .note(0, 'f#4', 32)
        .note(0, 'f#3', 32)
        .note(0, 'd3', 32)
        .note(0, 'a3', 32)
        .note(0, 'e4', 32)
        .note(0, 'd3', 32)

    metronome.metronomeBar(metro)
};