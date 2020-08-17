


var str;

function firstReverse(str){
var tableau = Array.from(str);
console.log(tableau);
var reversetab = tableau.reverse();
console.log(reversetab);
var tabToStr = reversetab.join('');
console.log(tabToStr);

};
console.log(firstReverse("Gabrielle développeuse web"));