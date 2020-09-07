var arr = [{
    title: "Philatélie représente",
    timestamp: 11111111,
    link: '/2006/04/12/philatelie-represente',
    tags: ['timbres', 'philatelie', 'l-amour-du-timbre']
}, {
    title: "Philatélie t'as vu!",
    timestamp: 11111112,
    link: '/2008/09/03/philatelie-t-as-vu',
    tags: ['musee-du-timbre', 'collection', 'timbre-meilleur-que-la-peinture', 'philatelie']
}, {
    title: "Grève des philatélistes : la fin du monde est vraie !",
    timestamp: 11111113,
    link: '/2012/12/12/greve-fin-du-monde',
    tags: ['sport-national', 'philatelistes-en-greve', 'fin-du-monde', 'philatelie']
}, {
    title: "La tech, j'en veux plus. Les bébés, j'en veux moins",
    timestamp: 11111114,
    link: '/2014/11/30/philatelie-tu-peux-pas-test',
    tags: ['resitance', 'tech']
}, {
    title: "Philatélie tu peux pas test!",
    timestamp: 11111115,
    link: '/2015/02/05/philatelie-tu-peux-pas-test',
    tags: ['soyons-timbre', 'planche-de-timbre', 'timbre', 'philatelie']
}, {
    title: "La tech, la tech, la tech. Mieux que la mode",
    timestamp: 11111116,
    link: '/2018/03/19/philatelie-tu-peux-pas-test',
    tags: ['fashion-week', 'fashion-geek', 'tech']
}];

var newArrTech = [];

var arr2 = arr.filter(function (elem) {

    for (i = 0; i < elem['tags'].length; i++) {

        // elem['tags'][i] parcourt les arrays de toutes les  keys 'tags':
        console.log(elem['tags'][i]);

        if (elem['tags'][i] == 'tech') {
            newArrTech.push(elem);
            // affiche bien uniquement les articles qui ont le tag 'tech':
            console.log(newArrTech);
        }
    }

    return; // ??

});
console.log(arr2);


/* var arr3 = arr.map(function(elem){

    return 'return';

});
console.log(arr3);
 */