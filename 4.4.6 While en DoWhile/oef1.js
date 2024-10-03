const prompt = require("prompt-sync")();
let getal = Number(prompt("Geef een getal in"));
let som = getal;
while(getal > 0){

    getal = Number(prompt("Geef een getal in."));
    som += getal;
}
console.log(som);