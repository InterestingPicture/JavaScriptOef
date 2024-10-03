const prompt = require("prompt-sync")();

let jaar = Number(prompt("Geef een jaar in"));
let maand = Number(prompt("Geef een maand in"));

if((jaar%4 == 0 && jaar%100 != 0)||(jaar%400 == 0)){
if(maand == 2){
    console.log("Februari in een schrikkeljaar.");
}
else{
    console.log("Geen februari.");
}
} else if(maand == 2){
  console.log("Februari in een normaal jaar.");
}
