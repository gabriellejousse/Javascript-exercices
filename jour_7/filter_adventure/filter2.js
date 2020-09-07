var arr = ['a', 'b', 'a', 'c', 'a', 'd'];

var arr2 = arr.filter(function(elem){

    // affiche tous les éléments qui sont différents de 'a'
    return elem != 'a';

});

console.log(arr2)

// OK