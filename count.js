const fs = require('fs');
const splitted = fs.readFileSync('./tokens.txt', {
    encoding: 'utf-8'
}).split("\n");
let num = 0;
splitted.forEach((split) => {
    if(split.startsWith("#")) return;
    if(!split.length == 60) return;
    num++;
});
console.log(num);