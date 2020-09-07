var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]



var arr2 = arr.map(function (elem) {

    var fullName = { fullName: elem['firstName'] + ' ' + elem['surname'] };
    return fullName;
})

console.log(arr2)

// OK