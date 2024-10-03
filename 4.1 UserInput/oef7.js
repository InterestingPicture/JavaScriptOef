const prompt = require ("prompt-sync")();

const seizoen = Number(prompt("Geef een getal tussen 1 en 12 in."));
let season;
switch(seizoen){
    case 1:
        season = "Januari"
        break;
    case 2:
        season = "Februari"
        break;
    case 3:
        season = "Maart"
        break;
    case 4:
        season = "April"
        break;
    case 5:
        season = "Mei"
        break;
    case 6:
        season = "Juni"
        break;
    case 7:
        season = "Juli"
        break;
    case 8:
        season = "Augustus"
        break;
    case 9:
        season = "September"
        break;
    case 10:
        season = "Oktober"
        break;
    case 11:
        season = "November"
        break;
    case 12:
        season = "December"
        break;
    default:
        season = "Geef een geldige waarde in"
        break;
}
console.log(season);