const info = require('./information');

var cowsay = require("cowsay");
console.log(cowsay.say({
    text : (`I'm ${info.name} from ${info.campus}`),
    e : "oO",
    T : "U "
}));