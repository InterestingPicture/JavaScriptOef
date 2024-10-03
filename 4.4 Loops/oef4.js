const prompt = require("prompt-sync")();

const string = prompt("Geef een tekst in");
let omgekeerde = ' ';
for(let i = string.length-1; i >= 0; i++){
    omgekeerde += string[i];
}
console.log(omgekeerde);