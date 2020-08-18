/* SYNTAXE et RETURN */

function nomdelafonction (parametre){
    var coucou = "coucou";
    return coucou + ' ' + parametre;
    // le résultat renvoyé ici est "coucou Gab", car l'argument est Gab
};

console.log(nomdelafonction('Gab'));
// ici, le parametre est 'Gab'. Il va s'intégrer dans la fonction
// à chaque fois que le paramètre sera appelé


// une fonction ne peut avoir qu'UN SEUL return
// un return peut être de n'importe quel type (nombre, string...),
// mais il ne peut renvoyer qu'UNE SEULE valeur


/* VARIABLES ET FONCTIONS */

var a = "dis";
function maFonction(mot){
return a + " " + mot;
}
console.log(maFonction("avion"));
// ici, la variable a est déclarée avant le début de la fonction
// elle est bien prise en compte par la fonction et
// on pourra s'en resservir pour d'autres choses en dehors de la fonction


function maFonction(mot){
    var a = "dis";
    return a + " " + mot;
}
console.log(maFonction("bateau"));
// ici, la variable a est déclarée à l'intérieur de la fonction
// elle est bien prise en compte par cette fonction,
// par contre, elle ne pourra pas être réutilisée à l'extérieur de cette fonction


/* PARAMÈTRES */

function ma2Fonction(jour){
    var a = "tu viens";
    var b = "?";
    return a + " " + jour + " " + "ou" + " " + jour2 + b ;
}
var jour = "lundi";
var jour2 = "mardi";
console.log(ma2Fonction(jour, jour2));
    // on peut indiquer plusieurs paramètres à la fonction
    // mais attention de bien les déclarer au préalable
    // on doit aussi respecter l'ordre d'apparition des paramètres dans la fonction


/* FUNCTION AVEC LA MÉTHODE Math.random */

function randomBasic(){
    return Math.random();
}
console.log(randomBasic());
    // la méthode Math.random si elle n'est pas 'améliorée' d'autres méthodes, 
    // ... donnera toujours un décimal aléatoire entre 0 et 1(non inclu)
    // le résultat de cette fonction sera donc 0,67283937 ou 0,25372892 ou ...


function randomFloat(min, max){
    return (Math.random() * (max-min) + min);
}
console.log(randomFloat(0,10));
    //le résultat affichera ici un nb décimal entre 0 et 10
    //pour tomber sur un entier, il faut suivre la méthode ci-dessous:



function randomInt(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}
console.log(randomInt(0,10));
    // on doit ajouter Math.floor à la fonction Math.random
    // Math.floor() permet d'arrondir un décimal à l'entier du dessous (Math.floor(3,7) -> 3)
    // on peut aussi utiliser Math.ceil(), qui arrondit un décimal à l'entier du dessus (Math.ceil(4,2) -> 5)