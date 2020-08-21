


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

