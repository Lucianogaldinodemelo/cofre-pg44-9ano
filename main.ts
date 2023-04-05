basic.forever(function () {
    if (input.lightLevel() > 0) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
