

function passwordGen(num){
    var min = 65;           // code ASCII du A
    var max = 90;           //code ASCII du Z
    var password = '';      // le password devra être une string 
    if(num > 15 || num < 6){        // si num est supérieur à 15 OU inférieur à 6
        return 'Your password need to be between 6 and 15 char'
    }
    for (var i = 0 ; i < num; i++ ){        //num est le nb de lettre du mdp (défini par la fonction)
        var index = Math.floor((Math.random() * (max - min)) + min);
        //mon index sera un chiffre random entre 65 et 90, qu'on arrondira avec Math.floor
        //j'ai du faire ((Math.random() * (max - min)) + min) car Math.random() tout seul ..
        //.. donne un nb aléatoire en 0 et 1. 
        // le resultat d'index sera un nb en tre 65 et 90
        password = password + String.fromCharCode(index); 
        // String.fromCharCode(index) demande à l'index trouvé précédemment (chiffre entre 65 et 90)
        // de se convertir au code ASCII correspondant. Ex : si index = 66, le password donnera B
    }
    return password;
};

console.log(passwordGen(10));

// OK