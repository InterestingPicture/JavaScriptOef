const prompt = require ("prompt-sync")();

let inkomen = Number(prompt("Geef een inkomen in."));
let belasting;
let netto;
if(inkomen < 10000){
    belasting = 0;
}else if(inkomen > 10000 && inkomen < 200000){
    belasting = 0.1;
}else if(inkomen > 20000 && inkomen < 50000){
    belasting = 0.2;
}else{
    belasting = 0.3;
}
netto = inkomen - inkomen*belasting;
console.log("Er is belasting van " + belasting*100 + "% met een netto inkomen van " +  netto);

