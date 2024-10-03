const prompt = require("prompt-sync")();

let zin = String(prompt("Geef een tekst in"));
if(zin.substring(zin.length, 1) != "."){
  zin= zin+ ".";
}
console.log(zin);