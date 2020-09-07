var arr = ['pan', 'top', 'pal', 'tool'];
var newArr = [];




var arr2 = arr.map(function (elem) {

    // je split chaque elem (chaque valeur du tableau) en des tableaux lettres par lettres
    var newArr = elem.split('');
    console.log(newArr);

    // je reverse chaque petits tableaux que j'ai créé pour chaque elem
    var arrReverse = newArr.reverse();
    console.log(arrReverse)

    // je retransforme en string les petits tableaux reversed que j'ai créé
    var joinReverseArr = arrReverse.join('');
    console.log(joinReverseArr)

    // comme il y a 4 elem dans le tableau initial, 
    // mon return va forcément retourner un tableau de 4 elem (avec les elem reverse et joints que j'ai fait avant)
    return joinReverseArr;
});

console.log(arr2)



// OK