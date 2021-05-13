let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() <= 25) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (input.lightLevel() > 60) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (input.lightLevel() > 25 && input.lightLevel() < 60) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
