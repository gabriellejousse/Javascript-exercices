var arr = ['a', 'b', 'a', 'c', 'a', 'd'];

var arr2 = arr.filter(function (elem) {
    
    // attention à bien mettre "==" et pas "=" !!
    return elem == 'a';

});
console.log(arr2)

// OK