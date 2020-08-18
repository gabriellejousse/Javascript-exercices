/* BOUCLE FOR ET LENGTH */

var sentence="coucou c'est moi";
for (var i = 0; i < sentence.length; i++){
    console.log(sentence); 
    // je vais afficher "sentence" autant de fois que la longueur du string (ici 15 fois)
    // coucou c'est moi
    // coucou c'est moi
    // ...
    console.log(sentence[i]);
    // je vais afficher les lettres de sentence caractere par caractere :
    // c
    // o
    // u ....
}




/* CHAR AT */

console.log("essai2");
console.log(sentence.charAt(1)); 
    // je sélectionne le caractère 1 de la string sentence ('o')



var trait = '-------------';
console.log('-------------');




/* ARRAY FROM ET SPLIT */

var phrase = 'hello it is me';
console.log( Array.from(phrase) );
    // je transforme la string phrase en tableau ['h','e','l'...]
console.log( phrase.split("") ); 
    // je transforme la string phrase en tableau ['h','e','l'...]
console.log( phrase.split(" ") ); 
    // je transforme la string en tableau ['hello', 'it', 'is', 'me']

var phrase2 = phrase.split(" "); 
    // je nomme la variable qui correspond à la transformation en tableau de ma string phrase
console.log( phrase2[2]);
    // j'affiche la partie qui a l'index 2 (position 2) dans ce tableau (ici, "is")





/* INDEX OF */

console.log( phrase.indexOf("llo") ); 
    // je renvoie l'index (le rang du caractere) de "llo" (ici, 2)
    // si la valeur n'existe pas dans la string, (ex= "w"), la console affichera tjr "-1".



var trait = '-------------';
console.log('-------------');





/* START WITH - END WITH */

var song = "singing in the rain";
console.log(song.startsWith("singing"));
console.log(song.startsWith("s"));
// la string commençant bien par "singing" et "s", la console affichera "true"
console.log(song.endsWith("67")); 
console.log(song.endsWith("N"));
// la string ne finissant pas par "67", ni par "N" (mais "n") la console affichera "false"





/* TO LOWER/UPPER CASE */

var pays = "Royaume-Uni";
console.log( pays.toLowerCase() );
    // je passe "royaume-uni" en minuscule
console.log( pays.toUpperCase() );
    // je passe "ROYAUME-UNI" en majuscule


