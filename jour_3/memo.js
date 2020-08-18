var result = [];

function word(str){
    for(var i = 0; i < str.length ; i++){
    console.log(str[i]);  
    // affiche : 
    // h
    // e
    // l
    // l
    // o
    // autre méthode pour afficher une string caract par caract sans la passer en tableau : str.charAt(i));
      result.push(str[i]);
      // on push le contenu de la str parcourue par la boucle (str[i]) dans un tableau
    }
    return result;
};
console.log(word("hello"))

