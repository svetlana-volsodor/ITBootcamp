"use strict";

var _pozdrav = require("./pozdrav");

//moderan JS kod:
var greet = function greet(name) {
  console.log("Hello, ".concat(name, "!"));
};

greet("Mika");
greet('zika');
greet('pera');
greet('ljuba');
var x = 12;
(0, _pozdrav.hello)();
console.log(_pozdrav.niz);
