let metronome = require('./metroConstants.js');

var exports = module.exports = {}

var leftHand;
var rightHand;
var thirdVoice;
var metro;

exports.init = function(tracks) {
    leftHand = tracks.left;
    rightHand = tracks.right;
    thirdVoice = tracks.third;
    metro = tracks.metro;
    return this;
}

exports.addLine = function() {
    firstBar()
    secondBar()
    thirdBar()
    fourthBar()
}

function firstBar() {
    leftHand.note(0, 'c1', 64*3, 0, 1)
    thirdVoice.note(0, 'c1', 64*3, 0, 1)
    rightHand.note(0, 'c1', 64*1.5, 0, 1)
    rightHand.note(0, 'a4', 32)
    rightHand.note(0, 'a5', 32)
    rightHand.note(0, 'g5', 32)
    metronome.metronomeBar(metro);
}

function secondBar() {
    thirdVoice.note(0, 'd3', 64 * 3)
    leftHand.note(0, 'c1', 32, 0, 1)
    leftHand.note(0, 'a3', 32)
    leftHand.note(0, 'd4', 32)
    leftHand.note(0, 'a3', 32)
    leftHand.note(0, 'd4', 64)

    rightHand.note(0, 'f#5', 64 * 1.5)
    rightHand.note(0, 'd5', 32)
    rightHand.note(0, 'g5', 32)
    rightHand.note(0, 'f#5', 32)
    metronome.metronomeBar(metro);
}

function thirdBar() {
    thirdVoice.note(0, 'a2', 64*2)
    leftHand.note(0, 'c1', 32, 0, 1)
    leftHand.note(0, 'e3', 32)
    leftHand.note(0, 'c#4', 64)
    leftHand.note(0, 'a3', 64)
    thirdVoice.note(0, 'a2', 64)

    rightHand.note(0, 'e5', 64*2)
    rightHand.note(0, 'd5', 32)
    rightHand.note(0, 'e5', 32)
    metronome.metronomeBar(metro);
}

function fourthBar() {
    thirdVoice.note(0, 'b2', 64*2)
    leftHand.note(0, 'c1', 32, 0, 1)
    leftHand.note(0, 'f#3', 32)
    leftHand.note(0, 'd4', 32)
    leftHand.note(0, 'f#3', 32)
    leftHand.note(0, 'b3', 64)
    thirdVoice.note(0, 'b2', 64)

    rightHand.note(0, 'f#5', 64*1.5)
    rightHand.note(0, 'e5', 32)
    rightHand.note(0, 'd5', 64)
    metronome.metronomeBar(metro);
}