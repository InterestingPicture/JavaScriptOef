const prompt = require ("prompt-sync")();
let lijnen = Number(prompt("Vul een aantal lijnen in: "));
let driehoek="";
let tel = 0;
const interval = Number(prompt("Geef een interval in: "));
for(let i = 1; i <= lijnen; i++){ 
    driehoek = "";
   for(let a = 1; a <= lijnen-i; a++){
    driehoek += " ";
   
   }
   for(let b = 1; b<=i;b++){
    driehoek += "#";
    tel++;
   }
   for(let c = 2; c<=i; c++){
    driehoek +="#";
    tel++;
   }
   if(tel = interval-1){
    driehoek += "@";
    tel = 0;
}

    console.log(driehoek);
}

