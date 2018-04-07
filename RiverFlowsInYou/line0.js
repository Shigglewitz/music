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

exports.addLine = function() {
    leftHand.note(0, 'c4', 64 * 4, 0, 1)
    rightHand.note(0, 'c4', 64 * 4, 0, 1)
    metronome.metronomeBar(metro);
}