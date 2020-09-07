// on split la str en tableau de mots
// on compte le nombre de caractères LETTRE par mot (exclure les nombres et la ponctuation)
// si 2 mots ont le même nombre de lettres, c'est le premier  qui est affiché
// afficher le mot qui a le plus grand nombre de lettres

function longestWord(str) {

    // je converti ma string en tableau de mots : 
    var strArray = str.split(' ');
    console.log(strArray);

    var newArray1 = [];
    var newArray2 = [];

    for (var i = 0; i < strArray.length; i++) {

        // sélectionne uniquement les mots composés de lettres (sans les ponctuations):
        var onlyLetters = strArray[i].match(/\b[a-zA-Z]+/gi)
        console.log(onlyLetters)

        // créer la nouvelle str sans ponctuation : 
        var newStr = onlyLetters.join(' ');
        console.log(newStr)

        // mettre les nouvelles str sans ponctuation dans un tableau:
        newArray1.push(newStr)
        console.log(newArray1)

        // parcourir la longueur de chaque nouvelle str du tableau :
        var nbLetters = newArray1[i].length;
        console.log(nbLetters)

        // on push la longueur de chaque str dans un nouveau tableau : 
        newArray2.push(nbLetters);
        console.log(newArray2)
    }
    // on trouve l'index correspondant à la + grande longueur du mot:
    var maximumLength = newArray2.indexOf(Math.max.apply(null, newArray2))
    console.log('index de la longueur la + grande : ' + maximumLength)

    // on cherche dans l'array de mot quel est le mot qui a le même index que maximum length
    // [ 3, 6, 2]           et          ['you', 'coucou', 'is']
    // index nb le + gros : 1 -> donc l'index du mot le plus long est 1 aussi

    var wordLengthMax = newArray1[maximumLength]

    return 'mot le plus long:  ' + wordLengthMax;
}
console.log(longestWord('I love dogs'));

//OK

