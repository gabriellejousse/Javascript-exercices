
// on enlève la partie node et fichier.js de l'array process.argv
// on parcourt l'array de process.argv avec la boucle for (qui commence a l'index 2 et qui continue jusqu'a la fin du tableau)
// les valeurs sont sorties du tableau process.argv
// on converti ces valeurs de string à number
// puis on les push dans un nouveau tableau (newArr)

// en dehors de la boucle : 
// on déclare à quel index du tableau se situe la valeur scndSmaller (index 1)
// on déclare à quel index du tableau se situe la valeur scndGreater (index de la longueur du tableau -2 )
// on retourne [scndSmaller , scndGreater].




var newArr = [];
var arg1 = process.argv;



function secondGreatLow(arg1) {

    var arrStr = process.argv.slice(2);     // arr sans les str de node et fichier.js
    /* console.log(arrStr) */

    for (var i = 2; i < process.argv.length; i++) {
        var strI = process.argv[i];
        //affiche les valeurs du tableau les unes après les autres
        // problème : les valeurs ne sont plus des nb mais des strings
        // on doit donc les re convertir en numbers (parseInt) ET les mettre dans un tableau (.push):

        newArr.push(parseInt(strI))      // on fait rentrer les nombres dans un nouveau tableau
        //console.log(newArr)        
        /* affiche :
         [ 2 ]
        [ 2, 3 ]
        [ 2, 3, 16 ]
        [ 2, 3, 16, 18 ]
        [ 2, 3, 16, 18, 29 ] */
    }
    /* console.log(newArr); */
    // en dehors de la boucle, // newArr = [ 2, 3, 16, 18, 29 ]

    var scndSmaller = newArr[1];        // la 2e plus petite valeur est à l'index 1 de newArr
    var scndGreater = newArr[newArr.length - 2];        // la 2e plus grande valeur est à l'index 1 de newArr

    return [scndSmaller, scndGreater] ;
}
console.log(secondGreatLow(arg1))