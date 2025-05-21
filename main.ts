function Start () {
    rechts = 0
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    while (input.buttonIsPressed(Button.B)) {
        zahl += 1
    }
    while (input.buttonIsPressed(Button.A)) {
        zahl += -1
    }
}
let zahl = 0
let rechts = 0
basic.showString("Hallo")
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
Start()
