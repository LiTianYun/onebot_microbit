// tests go here; this will not be compiled when this package is used as a library
led.enable(false)
basic.forever(function () {
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P6, key.readkey())
})
