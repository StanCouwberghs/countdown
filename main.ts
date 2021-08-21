for (let index = 0; index <= 10; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
}
for (let index = 0; index <= 10; index++) {
    basic.showNumber(0 - index)
}
basic.showString("HEY MONGOOL")
music.playTone(392, music.beat(BeatFraction.Whole))
basic.forever(function () {
	
})
