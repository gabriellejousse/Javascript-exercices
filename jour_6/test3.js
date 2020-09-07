

function longestWord(str) {

    // je converti ma string en tableau de mots : 
    var strArray = str.split(' ');
    console.log(strArray)

    var newArray = [];

    for (var i = 0; i < strArray.length; i++) {

        // parcourir la longueur de chaque valeur du tableau :
        var nbLetters = strArray[i].length;
        //console.log(nbLetters)

        // on push le nb de lettres dans un nouveau tableau : 
        newArray.push(nbLetters);
        console.log(newArray)
    }
    // on trouve l'index correspondant à la + grande longueur du mot:
    var maximumLength = newArray.indexOf(Math.max.apply(null, newArray))
    console.log('index de la longueur la + grande : ' + maximumLength)

    // on cherche dans l'array de mot quel est le mot qui a le même index que maximum length
    // [ 3, 6, 2]           et          ['you', 'coucou', 'is']
    // index nb le + gros : 1 -> donc l'index du mot le plus long est 1 aussi

    var wordLengthMax = strArray[maximumLength]

    return 'mot le plus long:  ' + wordLengthMax;
}
console.log(longestWord('Hello coders'))