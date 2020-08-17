
function simpleAdding(num){
    var resultat=0;
for ( var i=1; i<=num; i++){ 
 // on commence par 1
 // tant que i est inférieur ou égal à 5
 // on lui ajoute 1 à chaque return
    resultat=resultat+i; 
// 1er tour de boucle: resultat=0+1 -> resultat=1
// 2e tour de boucle resultat=1+1 -> resultat=2
// 3e tour de boucle resultat=2+1 -> resultat=3
//... jusqu'à ce que i soit inférieur ou égal à 5
}
return resultat; //permet de recommencer la boucle for jusqu'à ce que la condition i<=num soit remplie
};

console.log(simpleAdding(5));

//résultat=15 car 1+2+3+4+5=15