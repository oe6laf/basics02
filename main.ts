input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.B, function () {
    game.addScore(1)
})
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(2000)
