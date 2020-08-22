//str = abc 
//une boucle parcourt la str
/*  pour chaque i, elle remplacera le str[i]
par le caractère situé 13 lettre plus loin dans l'alphabet */
// le retour est une str avec les lettres remplacées


function rot13(str) {
    var strModified = '';
    
    
    for (var i = 0; i < str.length; i++) {
        var strAscii = str.charCodeAt(i);           // on transforme toute la string en code ASCII (ex: A devient 65 etc.)
        // console.log(strAscii);

        if ((strAscii >= 65 && strAscii <= 77) || (strAscii >= 97 && strAscii <= 109)) {    // si i est supérieur= à A ou a et inférieur= à M ou m
            var strAsciiAdd13 = strAscii + 13;                          // on leur ajoute 13
            // console.log(strAsciiAdd13);
            strModified += String.fromCharCode(strAsciiAdd13);          // on les reconverti en string (ex: code 65(A) +13 = code 78 reconverti en N)
            // console.log(strModified);
        
        } else if ( strAscii > 77 || strAscii > 109) {               // si i est sup à M ou sup à m (soit les lettres de M à Z ou m à z)
            var strAsciiMidAlph= strAscii - 13;                      // on leur soustrait 13
            strModified += String.fromCharCode(strAsciiMidAlph);     // on les reconverti en string (ex : (code 90 (Z) - 13) = code 77 reconverti en M)
       
        }else {                                              // pour tous les autres caractères non cités ci dessus (espaces, chiffres, ponctuation...)
            strModified += String.fromCharCode(strAscii);      // on les reconvertis en string (ex : le code 32 redevient un espace)
        }
    }
    return strModified;
}
console.log(rot13('abc'));
console.log(rot13('My horse is Amazing.'));
console.log(rot13('AkjhZ zLKIJz , 23y'));

