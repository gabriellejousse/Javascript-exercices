var arr = [{
    firstName: 'David',
    surname: 'Beckham',
    job: 'footballer'
}, {
    firstName: 'James',
    surname: 'Corden',
    job: 'tv host'
}, {
    firstName: 'Daniel',
    surname: 'Craig',
    job: 'actor'
}, {
    firstName: 'Graham',
    surname: 'Norton',
    job: 'tv host'
}];

var arr2 = arr.filter(function(elem){

    // retourner uniquement les objets (elem) qui contiennent la valeur 'tv host' dans la key 'job'
    return elem['job'] == 'tv host';

});
console.log(arr2);

// OK