var exports = module.exports = {
    pause: function(track, duration) {
        track.note(0, 'c1', duration, 0, 1)
    }
}
