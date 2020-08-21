

function passwordGen(num){
    var min = 65;           
    var max = 90;           
    var password = '';      
    if(num > 15 && num < 6){        // si num est supérieur à 15 OU inférieur à 6
        return 'error'
    } 
    for (var i = 0 ; i < num; i++ ){        //num est le nb de lettre du mdp (défini par la fonction)
        var index = Math.floor((Math.random() * (max - min)) + min);

        password = password + String.fromCharCode(index); 

    }
    return password;
};

console.log(passwordGen(9));

// OK