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


// en funktion som tar 3 argument
// varje operator skulle ha sin egen funktion
function getMath(number1, number2, operator) {
    // kika om number är number
    if (typeof(number1) === "number" && typeof(number2) === "number" && typeof(operator) === "string") {
        if (operator === "*") {
            // kalla på en funktion som hanterar multiplikation
            multiply(number1, number2);
        } else if (operator === "+") {
            // kalla på en funktion som hanterar addition
            addition(number1, number2)
        } else if (operator === "-") {
            // kalla på en funktion som hanterar subtrahering
            minus(number1, number2)
        } else {
            console.log("Ogiltigt val")
        }
    }
};

getMath(1,7,"*");

function multiply(number1, number2){
    const sum = number1 * number2;
    console.log("summan blir:", sum);
};
function addition(number1, number2){
    const sum = number1 + number2;
    console.log("summan blir:", sum);
};
function minus(number1, number2){
    const sum = number1 - number2;
    console.log("summan blir:", sum);
};