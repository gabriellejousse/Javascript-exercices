var str;
function alphabetSoupSort(str){
    var tableau = str.split("");            //transfo de la string en tableau lettre par lettre ["g","a","b"...]
    var result= [];
   

    for (i = 0 ; i < tableau.length; i++){

        console.log(str.charCodeAt(i));
        // on transforme chaque lettre de la str en code ASCII à chaque tour de boucle
        // maintenant on doit les classer par ordre croissant


    }
return result
}
console.log(alphabetSoupSort("hello"));
//

