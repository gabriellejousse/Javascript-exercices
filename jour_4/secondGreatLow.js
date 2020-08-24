// arr est un tableau contenant des chiffres du plus petit au plus grand
// on doit sortir du tableau la 2e plus petite valeur et la 2e plus grande 
// ex : pour [3, 6, 23, 42, 78, 90] , le résultat affiché sera 6 , 78

var arr = [];
var scndSmaller = [];
var scndGreater = [];

function secondGreatLow(arr) {
    scndSmaller = arr[1];
    // console.log(scndSmaller);
    scndGreater = arr[arr.length - 2];   //arr.length -2 pour arriver à l'avant dernière valeur du tableau
    // console.log(scndGreater);

    return [scndSmaller, scndGreater] ;
}
console.log(secondGreatLow( [3, 4, 6, 23, 42, 51, 65, 72, 90] ));
console.log(secondGreatLow( [2, 6, 33, 49] ));

//ok