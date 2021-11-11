input.onGesture(Gesture.TiltRight, function () {
    timer += 10
    basic.showNumber(timer)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    timer += -1
    basic.showNumber(timer)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    timer += -10
    basic.showNumber(timer)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    while (timer > 0) {
        basic.showNumber(timer)
        timer += -1
        if (timer < 10) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        basic.pause(500)
    }
    basic.showNumber(0)
    basic.clearScreen()
    music.playTone(196, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P0, 1)
    music.playTone(196, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P0, 1)
    radio.sendString("bum")
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    timer += 1
    basic.showNumber(timer)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    otro += 1
    basic.showNumber(otro)
})
let otro = 0
let timer = 0
radio.setGroup(1)
basic.forever(function () {
	
})
basic.forever(function () {
    if (otro == 10) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        otro = 0
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
