import { setHTML } from "../Utils/Writer.js";

function _drawTime() {
  let time = new Date().toLocaleTimeString("en-US");
  // console.log(time, "Time");
  let template = `${time}`;
  setHTML("time", template);
}

export class TimeController {
  constructor() {
    console.log("Hello from Time Controller");
    _drawTime();
    setInterval(_drawTime, 1000);
  }
}
