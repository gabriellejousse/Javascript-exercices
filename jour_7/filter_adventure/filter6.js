var arr = [{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'James',
    surname: 'Corden'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}, {
    firstName: 'Graham',
    surname: 'Norton'
}];

var arr2 = arr.filter(function(elem){

    // retourne uniquement les objets (elem) dont le 'firstName' commence par 'D'
    // on sélectionne les premières lettres de chaque 'firstName' avec .substr(0,1)
    return elem['firstName'].substr(0,1) == 'D';  

});

console.log(arr2);

// OK