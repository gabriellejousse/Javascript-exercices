// on a une fonction dont le paramètre est une string composée de x et de o
// on veut explorer la str pour compter le nombre de o et le nombre de x
// si le nb de x est égal au nb de 0 : true
// sinon : false

function exOh(str) {
    var lettreX = 'x';

    var lettreO = 'o';

    var compteurX = 0;
    var compteurO = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i].includes(lettreX)) {     // si str contient x, le compteur de x s'incrémente de +1
            compteurX = compteurX + 1;
            //console.log(compteurX);
        }
    }
    for (var j = 0; j < str.length; j++) {      // si str contient o, le compteur de o s'incrémente de +1
        if (str[j].includes(lettreO)) {
            compteurO = compteurO + 1;
            //console.log(compteurO);
        }
    }

    if (compteurX == compteurO) {           // si le compteur de x est égal au compteur de o, return 'true', sinon 'false'
        return 'true';
    } else {
        return 'false';
    }
    
};

console.log(exOh('xoxoxo'));