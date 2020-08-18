

function letterCapitalize(sentence){
    var tableauSentence = sentence.split(" ");
    var result = [];
    var firstMaj = '';
    var restOfLetters = '';

    for(var i = 0; i <= tableauSentence.length - 1; i++){
        // console.log(tableauSentence[i]);

        var firstMaj = tableauSentence[i].substr(0,1).toUpperCase();
        // console.log(firstMaj);
        // affiche B Y U pareil que ligne au-dessus (mais on a attribué ces lettres a la var firstMaj)
        // pr les manipuler plus facilement

        var restOfLetters = tableauSentence[i].substr(1, tableauSentence[i].length);
        //console.log(restOfLetters);
        // affiche ring our mbrella (mots sans les premières lettres

        result.push(firstMaj + restOfLetters);
        // on veut push Bring Your Umbrella dans un tableau 
        // .push sert à ajouter une ou des valeurs dans un tableau
    }
    return result.join(' ');
    // transforme le tableau tableauSentence en string
}
console.log(letterCapitalize('bring your umbrella'));

//ok
