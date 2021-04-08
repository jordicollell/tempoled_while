input.onButtonPressed(Button.A, function () {
    y = 0
    x = 0
    while (x < 5 && input.buttonIsPressed(Button.B) == false) {
        y = 0
        while (y < 5 && input.buttonIsPressed(Button.B) == false) {
            basic.pause(100)
            led.unplot(y, x)
            y = y + 1
        }
        x = x + 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let x = 0
let y = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
