input.onButtonPressed(Button.A, function () {
    if (menu == 0) {
        radio.sendString("Hello!")
    } else if (menu == 1 && emoji == 1) {
        emoji = 2
        basic.showIcon(IconNames.SmallHeart)
    } else if (menu == 1 && emoji == 2) {
        emoji = 3
        basic.showIcon(IconNames.Yes)
    } else if (menu == 1 && emoji == 3) {
        emoji = 4
        basic.showIcon(IconNames.No)
    } else if (menu == 1 && emoji == 4) {
        emoji = 1
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (menu == 1 && emoji == 1) {
        radio.sendString("heart")
        menu = 0
    } else if (menu == 1 && emoji == 2) {
        radio.sendString("mini heart")
        menu = 0
    } else if (menu == 1 && emoji == 3) {
        radio.sendString("yes")
        menu = 0
    } else if (menu == 1 && emoji == 4) {
        radio.sendString("no")
        menu = 0
    } else if (menu == 0) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        basic.clearScreen()
        basic.showString("Settings")
        menu = 2
        basic.showString("Coming soon")
    } else if (menu == 2) {
        menu = 0
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Hello!") {
        basic.showString("Hello!")
    } else if (receivedString == "heart") {
        basic.showIcon(IconNames.Heart)
    } else if (receivedString == "mini heart") {
        basic.showIcon(IconNames.SmallHeart)
    } else if (receivedString == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "no") {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    if (menu == 0) {
        menu = 1
        basic.showString("Select an Emoji.")
        basic.showString("Press A and B at the same time to send.")
        basic.showIcon(IconNames.Heart)
        emoji = 1
    }
})
radio.onReceivedValue(function (name, value) {
    basic.showString("Connected")
})
let emoji = 0
let menu = 0
radio.setGroup(1)
radio.sendValue("Microbit Network #", 1)
menu = 0
emoji = 0
