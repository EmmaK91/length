//Skriv en funktion som tar en sträng som parameter och 
// returnerar längden på en sträng.
// Anropa funktion och console.log svaret. Tips! 
// Du kan skriva .length på en variabel 
// som är en sträng för att få längden.



function getLängd(katt, hund, häst, kanin){}
    console.log(getLängd.length)


    


//Skriv en funktion som plockar ut året från en sträng i datumformat. 
//Använd substring(startIndex, endIndex)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring. 
//Funktionen ska ta en parameter, som ska vara en sträng. 
//Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. 
//Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.


function year(date){
    let year = date.substring(0, 4);
    year = +year;
    return year;

}
console.log(year("2025-05-13"));