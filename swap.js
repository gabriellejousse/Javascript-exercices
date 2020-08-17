

var first=30;
var second=25;
var c; // la variable n'a pas de valeur car on va lui en donner une dans la function

function swap(first,second){
    c=first; //c=30 (attention a l'ordre !! si first=c, alors first deviendra vide)
    first=second; //first prend la valeur de second (25) donc : first=25
    second=c; // second prend la nouvelle valeur de c (30) donc : second=30

    return [first,second];
}

console.log(swap(first,second));