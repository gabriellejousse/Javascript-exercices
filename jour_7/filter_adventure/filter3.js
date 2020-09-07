var arr = [1, 'a', 2, 'b'];

var arr2 = arr.filter(function (elem) {

    // retourne uniquement les éléments qui ont le type 'string'
    return typeof elem === 'string';

})
console.log(arr2);

// OK