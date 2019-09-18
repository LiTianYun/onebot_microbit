/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */


// basic.showLeds(`
//     . . . . .
//     . # . # .
//     . . . . .
//     # . . . #
//     . # # # .
//     `);









/**
 * 自定义图形块
 */
//% weight=100 color=#FFA500 icon="?"
namespace key {


    /**
     * TODO: 按键 
     * RETURN: 0-按下 1-弹起
     * @param value 按键 输出：0-按下 1-弹起
     */
    //% block
    export function readkey(): number {
        let rkey = 1;
        let keystate = 1;
        //取值
        rkey = pins.digitalReadPin(DigitalPin.P4);
        //消抖
        if (rkey == 0) {
            basic.pause(10);
            if (rkey == 0) {
                keystate = 0;
            } else {
                keystate = 1;
            }
        }
        //点亮
        pins.digitalWritePin(DigitalPin.P10, keystate);
        //输出
        return keystate;
    }


}