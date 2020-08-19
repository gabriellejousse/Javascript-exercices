// arguments de la fonction :
//      str = phrase / mot
//      search = une lettre

// je parcours la string str pour l'inspecter
// quand je parcours la string str, je vérifie si ma lettre search est contenue dans cette string parcourue
// SI C'EST LE CAS, on doit faire un compteur et y ajouter 1 à chaque fois que la condition ci-dessus est respectée


function wordCount2(str, search) {


    // var obj = {
    //     str : "",
    //     search : "",
    // };

    var compteur = 0;

    for (var i = 0; i <= str.length; i++) {
        if (search.includes(str[i])) {
            compteur = compteur + 1;
        }
    }
    return compteur;
};

console.log(wordCount2("Gab est une développeuse de génie", "é"));