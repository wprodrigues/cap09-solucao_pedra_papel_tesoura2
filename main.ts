let mao1 = 0
let mao2 = 0
input.onGesture(Gesture.Shake, function () {
    mao1 = randint(1, 3)
    mao2 = randint(1, 3)
    if (mao1 == 1) {
        // Rock
        basic.showIcon(IconNames.SmallSquare)
    } else if (mao1 == 2) {
        // Paper
        basic.showIcon(IconNames.Square)
    } else {
        // Scissors
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    if (mao2 == 1) {
        // Rock
        basic.showIcon(IconNames.SmallSquare)
    } else if (mao2 == 2) {
        // Paper
        basic.showIcon(IconNames.Square)
    } else {
        // Scissors
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(500)
    basic.clearScreen()
})
