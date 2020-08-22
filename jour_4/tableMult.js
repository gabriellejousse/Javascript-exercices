// num est le multiplicateur
// on fait une boucle commençant par 1 qui tourne jusqu'à ce que i atteigne 10, avec i qui incrémente i+1 à chaque tour
var multiply = 0;

function tableMult(num) {
    for (var i = 1; i <= 10; i++){
        var result = i * num;
        //console.log(result);
        multiply += (i + "*" + num + "=" + i*num + "\n");
        //console.log(multiply)

    }
    return multiply ;
}
console.log(tableMult(2));
