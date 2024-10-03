const prompt = require("prompt-sync")();
let zin = String(prompt("Geef een tekst in"));
if(zin.includes("is")){
    console.log(zin.replace("is", "was"));
}
zin.toLowerCase();

console.log(zin.replace((zin.substring(0,1)), (zin.substring(0,1).toUpperCase())));
