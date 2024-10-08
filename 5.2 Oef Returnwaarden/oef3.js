const prompt = require ("prompt-sync")();
function berekenSom(start, eind){
    let som = 0;
    if(start < eind){
        for(i=start+1; i <= eind-1; i++){
            som += i;
        }
    }else{
        for(i=eind; i <= start; i++){
            som += i;
        }
    }
    return som;
}
let start = Number(prompt("Geef een startgetal in: "));
let eind = Number(prompt("Geef een eindgetal in: "));
console.log(berekenSom(start, eind));