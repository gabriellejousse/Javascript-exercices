function exOh(str){
var str;
var tableau = str.split("");
console.log(tableau)
// [x,o,x,o,o]
var lettreo = "o";
var lettrex = "x";
var index = tableau.indexOf(lettreo);
console.log(index);
    index = tableau.indexOf(lettreo, index + 1);



if (index != -1 && ){
return "true"
} else{
return "false"
}

};
console.log(exOh("xoxoo"));


// compter les x et les o dans le tableau
// s'il y a autant de x que de o = true
// sinon = false

