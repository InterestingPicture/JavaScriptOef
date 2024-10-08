let priem = 0;
let nietpriem = 0;
const prompt = require("prompt-sync")();
let limiet = Number(prompt("Geef een limiet in: "));
let hoogst;
function isPrime(n){

    if(n <= 1){
      return false;
    }
    for (let i = 2; i< n; i++){
      if(n%i ===0){
         return false;
      }

    }
    return true;
 }
 if(priem != 0){
  return true;
 }else{
    return false;
 }

function grootsePriem(limiet){
for(let i =limiet-1; i>1 ; i--){
   if(isPrime(i)){
      return i;
   }
   return null;
}
}
console.log(isPrime(7));
