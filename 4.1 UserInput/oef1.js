const prompt = require ("prompt-sync")();
let temp = Number(prompt("Wat is de temperatuur?"));
if(temp>20){
    console.log("Het is warm.");
} else{
    console.log("Het is koud.");
}