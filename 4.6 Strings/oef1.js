const prompt = require("prompt-sync")();

const zin = String(prompt("Vul een tekst in"));
if(zin.length > 10){
console.log("Dit is een lange tekst");
} else{
    console.log("Dit is een korte tekst");
}