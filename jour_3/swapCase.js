// str = 'Hello LOL'
// - on veut que la fonction retourne str avec les casses inversées
// créer une variable avec toutes les lettres majuscules
// créer une variable avec toutes les lettres en minuscules
// parcourir la str pour :
// si les lettres sont en majuscules -> les passer en minuscules
// si les lettres sont en minuscules -> les passer en majuscules
// retourner la str avec les casses inversées

var lettreMaj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lettreMin = 'abcdefghijklmnopqrstuvwxyz';
var result = '';

function swapCase(str) {

    for (var i = 0; i < str.length; i++) {          // explorer str caractère par caractère

        if (lettreMaj.includes(str[i])) {                // SI la lettre explorée est une majuscule:
            result = result + str[i].toLowerCase();         // 
        } else if (lettreMin.includes(str[i])) {         // SI la lettre explorée est une minuscule:
            result = result + str[i].toUpperCase();
        }

    }
    return result;
}
console.log(swapCase('Hello LOL'));
