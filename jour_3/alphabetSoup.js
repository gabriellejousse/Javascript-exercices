var str;
function alphabetSoup(str){
    var tableauStr = str.split("");
    console.log(tableauStr)
    // on a transformé la string en tableau
    for(var i = 0; i<=tableauStr.length; i++ ){     //on fait une boucle pour pouvoir parcourir le tableau char par char
        console.log(str[i]);
        //affiche:
        //h
        //e ...
        //console.log(str[i] < str[i+1]);
        
        if(str[i] < str[i+1]){         //si l'index x(str[i]) est inférieur à l'index suivant (str[i]+1), alors...
            var swap = str[i];
            str[i] = str[i+1];
            str[i+1] = swap;
            // après ça, si str[i] est plus grand que l'index suivant(str[i+1]), alors :
            // str[i] et str[i+1] doivent swap (échanger)
        }
    }
    return tableauStr[str[i] < str[i+1]];
}
console.log(alphabetSoup("hello"));

//swap de str[i] et str[i+1]:
// var swap = str[i];
// str[i] = str[i+1];
// str[i+1] = swap;
