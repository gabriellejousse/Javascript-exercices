// on veut remplacer toutes les premières lettres de chaque mot par une majuscule



function letterCapitalizeRegex(str) {

    var strArray = str.split(" ");
    var str = '';
    var restOfWord = '';
    var result = [];


    for (i = 0; i < strArray.length; i++) {
        var firstLetter = strArray[i][0];
        // firstLetter affiche : w a w w
        var firstLetterMaj = firstLetter.replace(firstLetter, firstLetter.toUpperCase());
        // firstLetterMaj affiche : W A W W
        var restOfWord = strArray[i].substr(1, strArray[i].length);
        // restOfWord affiche : hat onderful orld

        result.push(firstLetterMaj + restOfWord);
        // result affiche ['What', 'A', 'Wonderful', 'World']
    }
    return result.join(' ');
    // return affiche : What A Wonderful World
    // (si on ne met rien dans les parenthèses de join, les mots seront séparés de virgule)
}
console.log(letterCapitalizeRegex('hello it\'s gabrielle'));

// OK 








/* function letterCapitalizeRegex(str){

    var strArray = str.split(" ");
    var result;
    console.log(strArray)
    for(i = 0; i < strArray.length; i++){
        console.log(strArray[i]);
        console.log(strArray[i][0]);
        var firstLetterCap =  strArray[i][0].toUpperCase();
        console.log(firstLetterCap + str[i][str.length])
    }

    return 'my return';
}
console.log(letterCapitalizeRegex('what a wonderful world')); */