let expect = require('chai').expect;
let noteCreator = require('../noteCreator');

describe('noteCreator', function() {
    it('should parse input', function() {
        let expected = {
            channel: 0,
            notes: [ {note: 'c', octave: 4, } ],
            duration: 32
        };

        let actual = noteCreator.interpret(0, 'c4', 32);

        expect(actual).to.deep.equal(expected);
    });

    it('should find notes', function() {
        let cases = [
            { input: 'c4', output: {note:'c', octave:4}},
            { input: 'd4', output: {note:'d', octave:4}},
            { input: 'e5', output: {note:'e', octave:5}},
            { input: 'f#6', output: {note:'f#', octave:6}},
        ]
        function executeTest(testCase) {
            let actual = noteCreator.interpret(0, testCase.input, 32);
            expect(actual.notes.length).to.be.equal(1);
            expect(actual.notes[0].note).to.be.equal(testCase.output.note);
            expect(actual.notes[0].octave).to.be.equal(testCase.output.octave);
        };
        cases.forEach(executeTest);
    });

    function middleC() {
        return noteCreator.interpret(0, 'c4', 32);
    }

    it('should shift octaves up', function() {
        let note = middleC();

        noteCreator.shiftOctaveUp(note, 1);

        expect(note.notes[0].octave).to.be.equal(5);
    });

    it('should shift octaves down', function() {
        let note = middleC();

        noteCreator.shiftOctaveDown(note, 1);

        expect(note.notes[0].octave).to.be.equal(3);
    })

    it('should shift keys up by half step', function() {
        let note = middleC();

        noteCreator.halfStepUp(note, 1);

        expect(note.notes[0].note).to.be.equal('c#');
        expect(note.notes[0].octave).to.be.equal(4);
    });

    it('should shift keys up around octaves', function() {
        let note = noteCreator.interpret(0, 'b4', 32);

        noteCreator.halfStepUp(note, 1)
        expect(note.notes[0].note).to.be.equal('c');
        expect(note.notes[0].octave).to.be.equal(5);
    });

    it('should shift keys down by half step', function() {
        let note = middleC();

        noteCreator.halfStepDown(note, 1);

        expect(note.notes[0].note).to.be.equal('b');
        expect(note.notes[0].octave).to.be.equal(3);
    });

    it('should shift keys up by whole step', function() {
        let note = middleC();

        noteCreator.wholeStepUp(note, 1);

        expect(note.notes[0].note).to.be.equal('d');
        expect(note.notes[0].octave).to.be.equal(4);
    });

    it('should shift keys down by whole step', function() {
        let note = middleC();

        noteCreator.wholeStepDown(note, 1);

        expect(note.notes[0].note).to.be.equal('a#');
        expect(note.notes[0].octave).to.be.equal(3);
    }); 
});
