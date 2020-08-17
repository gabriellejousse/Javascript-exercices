// les tableaux (array) permettent de faire des listes facilement accessibles et manipulables
// contrairement aux objets, le tableau n'a pas besoin de nommer individuellement ses propriétés

/* SYNTAXE */

var tableau = [ "lundi", "mardi", "mercredi", "jeudi"];
console.log(tableau);
    // TOUJOURS des crochets dans lesquels on liste les propriétés du tableau

var tableau1 = [ "lundi", 189, true, {message : "coucou"}];
console.log(tableau1);
    // on peut mettre toute sorte de types dans un tableau
    // ici, une string, un number, un booléen(true), un objet{}


/* OBTENIR LA TAILLE D'UN TABLEAU */
    // la taille d'un tableau est le nb d'éléments que le tableau contient:

function monTableau(){
    var tableau = ["jaune", "vert", "bleu", "violet"];
    return tableau.length;
}
console.log(monTableau())
    // ici, le tableau est dans une fonction mais ça n'a pas d'importance
    // l'outil qui permet de compter le nb d'éléments du tableau est .length
    // ici, le résultat affiché sera 4


/* ACCÉDER À UN ÉLÉMENT D'UN TABLEAU */

    // chaque élément d'un tableau est identifié par un numéro : son indice/index
    // l'index d'un tableau commence toujours par 0

var tableauCouleurs = ["jaune", "vert", "bleu", "violet"];
    // ici, l'index de "jaune" est 0, celui de "vert" est 1 etc.

function mesCouleurs (){
    var tableauCouleurs = ["jaune", "vert", "bleu", "violet"]
    return tableauCouleurs[2];
}
console.log(mesCouleurs());
    // ici, je veux accéder à ma couleur "bleu", je tape alors son index: 2
    // comme on compte à partir de 0, le plus grand indice utilisable est le (nb d'éléments - 1) ici : 3



/* PARCOURIR UN TABLEAU */
    // pour cela, on utilise une boucle for qui passera en revue seule le tableau élément par élément

function mesCouleurs (){
    var tableauCouleurs = ["jaune", "vert", "bleu", "violet"]
   
    for (var i = 0; i < tableauCouleurs.length; i++){
console.log(tableauCouleurs[i]);
    }
}

 
    // 2eme méthode : la boucle for-of :
var tableauCouleurs = ["jaune", "vert", "bleu", "violet"]
for(var couleur of tableauCouleurs){
    console.log(couleur);
}
    // elle évite d'utiliser un compteur de boucle comme avec for





/* AJOUTER UN ÉLÉMENT AU TABLEAU */


// à la fin du tableau (.push) :

var tabMois = ["Janvier", "Février", "Mars", "Avril"];

tabMois.push("Mai");
console.log (tabMois);

    // avec la fonction .push, on peut ajouter une valeur à la fin du tableau
    // ici, le résultat du tableau après le passage de .push sera:
    // ["Janvier", "Février", "Mars", "Avril", "Mai"]


// au début du tableau (.unshift) :

var tabMois2 = ["Janvier", "Février", "Mars", "Avril"];

tabMois2.unshift("Décembre");
console.log (tabMois2);

    // avec la fonction .unshift, on peut ajouter une valeur au début du tableau
    // après le passage d'unshift, on obtiendra : 
    // ["Décembre","Janvier", "Février", "Mars", "Avril"]






/* SUPPRIMER UN ÉLÉMENT DU TABLEAU  avec .pop() et .splice() */

// .pop() :
var tabMois2 = ["Janvier", "Février", "Mars", "Avril"];

tabMois2.pop(); 
console.log (tabMois2);
    // ici .pop() va supprimer le dernier élément du tableau
    // résultat après .pop : ["Janvier", "Février", "Mars"]

// .splice( , ) :
var tabMois2 = ["Janvier", "Février", "Mars", "Avril"];

tabMois2.splice(1,2);
console.log (tabMois2);
    // .splice permet de suppr plusieurs éléments d'un coup
    // .splice(1,2) : ici, 2 éléments seront supprimés à partir de l'élément qui a l'index 1 ("Février")
    // résultat : ["Janvier", "Avril"]

var tabMois2 = ["Janvier", "Février", "Mars", "Avril"];


// .length après la suppression avec .splice( , )
tabMois2.splice(1,2);
console.log (tabMois2);
console.log(tabMois2.length); 
// ici il affichera 2 car après le passage de .splice, il ne reste plus que 2 éléments dans le tableau





/* CONVERTIR UN ARRAY EN STRING AVEC .join() */


var tableau = ['Il', 'fait', 'beau'];
var tableauToString = tableau.join(' ');
console.log(tableauToString);
// la console affichera "il fait beau", et plus ['Il', 'fait', 'beau']
// on peut mettre des espaces ou des tirets ou autre entre les valeurs du tableau convertis en string :
// tableau.join('') = la string créée sera sans espace entre les mots
// tableau.join(' ') = un espace entre chaque mot
// tableau.join('-') = un tiret entre chaque mot
// etc.