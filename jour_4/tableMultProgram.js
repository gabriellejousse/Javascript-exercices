// num est le multiplicateur
// on fait une boucle commençant par 1 qui tourne jusqu'à ce que i atteigne 10, avec i qui incrémente i+1 à chaque tour
var multiply = 0;

function tableMult(arg1) {
    for (var i = 1; i <= 10; i++){
        var result = i * arg1;
        //console.log(result);
        multiply += (i + "*" + arg1 + "=" + i * arg1 + "\n");
        //console.log(multiply)

    }
    return multiply ;
}
console.log(tableMult( parseInt( process.argv[2] )));
//  la console va exécuter la tableMult avec pour paramètre :
// l'index 2 du tableau process.argv (le multiplicateur qu'on écrit dans la console)
// le parseInt sert à convertir l'index 2 de process.argv en type nombre


//OK