var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
},{
    firstName: 'David',
    surname: 'Craig'
}]



var arr2 = arr.map(function(elem){

    return elem['firstName'] + ' ' +  elem['surname'];
})

console.log(arr2)

// OK