function isEven(n){
    if(n%2 ==0){
        return true;
    }else{
        return false;
    }
}
for(i=1; i <= 10; i++){
    console.log(i);
    if(isEven(i)==true){
        console.log("Dit getal is even.");
    }else{
        console.log("Dit getal is oneven.");
    }
}