

function letterCapitalize(sentence){
    
    var tableau = sentence.split(" ");
    console.log(tableau);
    var extrait = sentence.substr(0,1);
    console.log(extrait);
    var maj = extrait.toUpperCase();
    return maj;
};

console.log(letterCapitalize("bring your umbrella"));



var sentence = "bring your umbrella";
var tableau = sentence.split(" ");      
// on sépare la string sentence en tableau, mot par mot
console.log(tableau);
var result;

for (var boucle = 0 ; boucle < tableau.length ; boucle++){   
    var extrait = tableau[boucle].substr(0,1);      
    // sélectionne la 1e lettre de chaque valeur du tableau (grace à la boucle)
       
    var maj = extrait.toUpperCase();                
    // passe les 1e lettres de chaque valeur du tableau en majuscule
    console.log(maj);
    

    
};



var sentence = "bring your umbrella";
var tableau = sentence.split(" ");      
console.log(tableau);
var premiereVal = tableau[0][0];        // je récupère la première lettre [0] de la première valeur [0] de mon tableau
var deuxiemeVal = tableau [1][0];       // je récupère la première lettre [0] de la deuxieme valeur [1] de mon tableau
var troisiemeVal = tableau [2][0];     // je récupère la première lettre [0] de la troisieme valeur [2] de mon tableau
console.log(premiereVal, deuxiemeVal, troisiemeVal);    // b y u

var maj = premiereVal.toUpperCase();        // je met premiereVal (b) en majuscule
maj += deuxiemeVal.toUpperCase();           // je met deuxiemeVal (y) en majuscule
maj += troisiemeVal.toUpperCase();          // je met troisiemeVal (u) en majuscule
console.log(maj);                       // BYU






//essai non concluant
function letterCapitalize(sentence){
    for(var boucle = 0; boucle < tableau.length; boucle++){
        // on veut qu'a chaque fois que la boucle passe 
        // par l'indice 0 de chaque valeur du tableau, elle la mette en majuscule
        var result = tableau[0][0].toUpperCase();
    }
    return result;
}

