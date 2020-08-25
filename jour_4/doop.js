var nb1 = parseInt(process.argv[2])
var nb2 = parseInt(process.argv[4]);
var op = process.argv[3];


if (process.argv.length !== 5) {
    // Si la taille de process.argv n'est pas égale à 5 (5 arguments : 1)node 2)fichier.js 3)nb1 4)op 5)nb2), alors retourner 'error'
    console.log('error');
    return;
}


if (op === '+') {
    result = nb1 + nb2;
} else if (op === '-') {
    result = nb1 - nb2;
} else if (op === '*') {
    result = nb1 * nb2;
} else if (op === '/') {
    result = nb1 / nb2;
} else if (op === '%') {
    result = nb1 % nb2;
} else {
    console.log('aucune operations trouvé')
}

console.log(result)

// attention, pour exécuter une multiplication dans la console directement, mettre '*' entre guillemets/apostrophes
// sinon ça ne marchera pas