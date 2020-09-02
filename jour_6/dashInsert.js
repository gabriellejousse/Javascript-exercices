// on a un str avec une suite de chiffres '2983839'
// ensuite, on parcourt la str avec une boucle for
// dans cette boucle, on indique que SI un chiffre [i] est impair 
// ET que ce chiffre[i] a un nb impair avant lui, alors mettre un - après le  chiffre[i]


function dashInsert(str) {

    var result = '';
    for (i = 0; i < str.length; i++) {

        if ((str[i] % 2 != 0) && (str[i + 1] % 2 != 0)) { // si les nombres sont impairs ET qu'ils sont suivis d'un nb impair
        result += str[i] + '-';
        // on ajoute '-' après le nombre répondant à la condition;
        // ex: 5 devient 5 + '-' (= 5-)
        } else {
            result += str[i];
            // sinon, on affiche le nombre normalement (pas de modification)
        }
    }
    return  result;

}
console.log(dashInsert('4352747932'));

// OK 