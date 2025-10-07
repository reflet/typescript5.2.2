// ---------------------------------------

import {msg, version, showMessage} from "./utils/sample.js";
import callName from "./utils/message.js";
import math from "./utils/math.js";

/**
 * モジュール
 */

// sample01: module
console.log(msg);
console.log(version);
showMessage();

// sample02: export default
callName('スティーブ');

// sample03: export default (2)
console.log(math.add(1,3));     // 4
console.log(math.sub(3,1));     // 2

// ---------------------------------------
