const ioHook = require('iohook');
const robot = require("robotjs");

let mousePosition = {}
ioHook.on('mousemove', event => {
  let {x, y} = event
  mousePosition = {
    x,
    y
  }
});
ioHook.on('keydown', event => {
  if(event.keycode === 43){
    robot.mouseClick();
  }
});

// Register and start hook
ioHook.start();
// Alternativel\y, pass true to start in DEBUG mode.
ioHook.start(true);