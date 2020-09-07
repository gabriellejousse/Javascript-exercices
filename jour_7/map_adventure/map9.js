var arr = ['apple', 'croissant', 'pear'];

var arr2 = arr.map(function (elem) {

    return '<li>' + elem + '</li>';

})
console.log(arr2);

// OK