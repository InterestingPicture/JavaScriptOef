const prompt = require("prompt-sync")();
let ondergrens = Number(prompt("Geef een ondergrens in: "));
let bovengrens = Number(prompt("Geef een bovengrens in: "));
let deeldrie = 0;
for(let i = ondergrens; i <= bovengrens; i++){
    if(i%3 == 0){
    deeldrie += i;
    }
}
console.log(deeldrie);