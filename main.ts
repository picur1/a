music.play(music.stringPlayable("C5 A B G A F - - ", 1800), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
