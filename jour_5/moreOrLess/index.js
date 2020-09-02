var prompt = require('prompt');

prompt.start();

var min = 1;
var max = 100;
var nbMystere = Math.floor(Math.random() * (max - min + 1)) + min      //nbMystere = nb aléatoire entre 1 et 100
console.log(nbMystere);


var obj = {
    'Quel est le nombre?': 0
}


function displayPrompt() {
    prompt.get(['Quel est le nombre?'], function (err, result) {



        if (result['Quel est le nombre?'] > nbMystere) {
            console.log('C\'est moins !');
            displayPrompt();            // tant que le nbMystere n'est pas trouvé, on relance la fonction displayPrompt
        } else if (result['Quel est le nombre?'] < nbMystere) {
            console.log('C\'est plus !');
            displayPrompt();            // tant que le nbMystere n'est pas trouvé, on relance la fonction displayPrompt
        } else if (result['Quel est le nombre?'] = nbMystere) {
            console.log('Bravo, vous avez trouvé le nombre mystère !!!');
        }

    })
    return;
}
console.log(displayPrompt())


// ok mais affiche undefined à la première question