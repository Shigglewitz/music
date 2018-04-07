const scribble = require('scribbletune')

let c = scribble.clip({
    notes: ['c4'],
    pattern: 'x______-x-x-x-x-'
});

scribble.midi(c);

