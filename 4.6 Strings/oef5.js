const prompt = require("prompt-sync")();
let zin = String(prompt("Geef een zin in "));
const woord = String(prompt("Geef een scheldwoord in "));
let censor = "";

for(i = 0; i < woord.length; i++){
        censor += "*";
    }

while (zin.includes(woord))
{
     zin = zin.replace(woord, censor);
}

console.log(zin);
