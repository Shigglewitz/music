var exports = module.exports = {
    METRO_CHANNEL: 1,
    METRO_NOTE: '75',
    METRO_DURATION: 16,
    METRO_DELAY: 16 * 3,
    metronomeBar: function(metronome) {
        this.metronomeNote(metronome);
        this.metronomeNote(metronome);
        this.metronomeNote(metronome);
        // this.metronomeNote(metronome);
    },
    metronomeNote: function(metronome) {
        metronome
            .addNoteOn(this.METRO_CHANNEL, this.METRO_NOTE)
            .addNoteOff(this.METRO_CHANNEL, this.METRO_NOTE, this.METRO_DURATION)
            .addNoteOff(this.METRO_CHANNEL, this.METRO_NOTE, this.METRO_DELAY)    
    }
}
