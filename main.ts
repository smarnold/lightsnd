input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    basic.pause(1000)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
    indicate("left")
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
})
function indicate (direction: string) {
    indicating = true
    if (direction == "left") {
        for (let index = 0; index < 4; index++) {
            moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.show()
            basic.pause(200)
            moveMotorZIP.clear()
            moveMotorZIP.show()
            basic.pause(200)
        }
    } else if (direction == "right") {
        for (let index = 0; index < 4; index++) {
            moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.show()
            basic.pause(200)
            moveMotorZIP.clear()
            moveMotorZIP.show()
            basic.pause(200)
        }
    } else {
        indicating = false
    }
}
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    basic.pause(1000)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 20)
    indicate("right")
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
})
let indicating = false
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
let headlights = moveMotorZIP.range(0, 2)
let rearlights = moveMotorZIP.range(2, 2)
basic.forever(function () {
    if (!(indicating)) {
        if (input.lightLevel() < 20) {
            headlights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
            rearlights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        } else {
            moveMotorZIP.clear()
            moveMotorZIP.show()
        }
    }
})
