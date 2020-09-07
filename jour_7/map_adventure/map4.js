var arr = [1, 2, 3, 4];

var arr2 = arr.map(function(elem){
    if (elem%2 != 0){
        return false;
    } else {
        return true
    }
})

console.log(arr2);

// OK

