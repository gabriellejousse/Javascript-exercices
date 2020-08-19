

function vowelCount(str){
  var vowelList = 'aeiouyAEIOUY';
  var vcount = 0;
  
  for(var i = 0; i < str.length ; i++){
      console.log(str[i]);                  
      // str[i] = toutes les lettres du mot en sont passés en revue par la boucle
      // affiché comme ça :
      //g
      //a
      //b
    if (vowelList.indexOf(str[i]) !== -1) 
    // a chaque tour de boucle, ça vérifie si la lettre de str sélectionnée est dans la vowelList
    // si elle ne n'est pas dans la vowelList, ça donne -1 donc la condition n'en tiendra pas compte
    {
      vcount += 1;
      // si la condition if est remplie (la lettre inspectée est une voyelle), alors on ajoute 1 au compteur
    }
  
  }
  return vcount;
};
console.log(vowelCount("bonjour tout le monde"));

// OK
// a tester avec .includes