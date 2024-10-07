function berekenKorting(prijs, kortingsgroep, aantal){
    let totaalprijs = aantal*prijs;
    if(kortingsgroep == "a"){
      totaalprijs -= totaalprijs*0.1;
      console.log("De totaalprijs is " + totaalprijs);
    }else if(kortingsgroep == "b"){
        totaalprijs -= totaalprijs*0.2;
        console.log("De totaalprijs is " + totaalprijs);
    }else{
        console.log("Geef een gepast getal in.");
    }
}
berekenKorting(3, "b", 3);
berekenKorting(5, "a", 6);
berekenKorting(7, "c", 6);