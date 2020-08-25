// on doit parcourir le string - boucle for 
// convertir chaque caractère en code ASCII
// remplacer chaque lettre de la string par celle qui la suit dans l'alphabet
// faire une deuxieme boucle for qui parcourt les caractères modifiés
// repérer les voyelles (faire var voyelles = 'aeiouyAEIOUY')
// si la lettre parcourue est une voyelle (if (voyelles.includes(str[j]){ .toUpperCase})





function letterChange(str) {

    var strModified = '';
    var vowelList = 'aeiouyAEIOUY';
    var result = '';

    for (var i = 0; i < str.length; i++) {
        var strAscii = str.charCodeAt(i);

        if ((strAscii >= 65 && strAscii <= 89) || (strAscii >= 97 && strAscii <= 121)) {
            var strAdd1 = strAscii + 1;
            strModified += String.fromCharCode(strAdd1);
            // console.log(strAdd1)
        } else if ((strAscii = 90) || (strAscii = 122)) {
            var strZ = strAscii - 25;
            strModified += String.fromCharCode(strZ);
            // console.log(strZ)
        } else {
            strModified += String.fromCharCode(strAscii);
        }
    }

    for (var j = 0; j < strModified.length; j++) {          // explorer str caractère par caractère

        if (vowelList.includes(strModified[j])) {               
            strModified[j].replace(/(['e'])/gi, strModified.toUpperCase())
            console.log('oui');        
        }
    }
    return strModified;

}


console.log(letterChange('Coucou !'))