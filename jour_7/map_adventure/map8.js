var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var result = {}

var arr2 = arr.map(function (elem) {

    var fullName = { fullName: elem['firstName'] + ' ' + elem['surname'] };
    //console.log(fullName)

    // Object.assign(obj1, obj2) sert à fusionner deux objets ensemble
    // ici les objets de base (elem) + l'objet fullName
    return Object.assign(elem, fullName);
})

console.log(arr2)

// OK