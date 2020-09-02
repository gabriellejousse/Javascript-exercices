// Je vais transformer ma phrase en tableau de mots
​
// Pour chaque mots je dois parcourir lettre par lettre et compter les lettres identique
//  Comment faire pour compter les lettres identique dans mon mots
//      Pour chaque lettres je dois enregistrer le nombres d'occurences
//          Je peux l'enregistrer dans un objet qui a pour clefs la lettre et pour valeur le nombre d'occurence 
//          Maintenant pour comparer mes compteurs d'objet, je vais additioner les valeurs sup à 1
//      Je dois stoker le nombre dans une variable
//      Ce nombre je vais le comparer avec le prochain nombre
//      Si le prochain nombre est superieur
//          Je stock le mot dans le resultat (jecrase le resultat precedent)
​
​
// Hello apple pie mmeeetrt mmeeetrt
​
// {
//     a: 1,
//     p: 2,
//     l: 1,
//     e: 1
// } = 2
​
// {
//     m: 2,
//     e: 3,
//     t: 2,
//     r: 1
// } = 7
​
// {
//     p: 1,
//     i: 1,
//     e: 1
// } = 0
​
​
​
function letterCountRepeat(str) {
    var strArray = str.split(' ');
    var resultat = {
        mot: '',
        count: 0
    };
    // Je parcoure mon array de mots
    for (var i = 0; i < strArray.length; i++) {
        console.log(strArray[i]);
        var objCount = {};
        // Je parcoure mon mot charactère par charactère
        for (var j = 0; j < strArray[i].length; j++) {
            console.log(strArray[i].charAt(j));
            var letter = strArray[i].charAt(j);
            // objCount['H']
            if (objCount[letter]) {
                objCount[letter] += 1;
            } else {
                objCount[letter] = 1;
            }
        }
        var arrayKey = Object.keys(objCount)
        console.log(objCount)
        console.log(arrayKey)
        var sumCount = 0;
        // Je parcoure l'obj count pour additioner tout les count sup à 1
        for (var k = 0; k < arrayKey.length; k++) {
            if (objCount[arrayKey[k]] > 1) {
                sumCount += objCount[arrayKey[k]]
            }
        }
        console.log(sumCount)
​
        if (resultat.count < sumCount) {
            resultat['mot'] = strArray[i];
            resultat['count'] = sumCount
        }
    }
    return resultat
}
​
console.log(letterCountRepeat('Today, is the greatest day ever!'));
​
// var obj = {}
// console.log(obj)
// obj['nouvelleClef'] = 1
// console.log(obj)
// obj['nouvelleClef'] += 1
// console.log(obj)