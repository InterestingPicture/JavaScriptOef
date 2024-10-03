const prompt = require("prompt-sync")();
let getal;
do{
    getal = Number(prompt("Geef een getal in "));
}while(getal > 10 || getal < 0);
console.log(getal);