input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showString("Safe")
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showString("Armed")
    basic.showIcon(IconNames.TShirt)
})
radio.setGroup(1)
