function timeConvert(num){

var num;                                     //num=3700s
var num0=(num%60);                           //3700%60 -> le reste de la division = 40 -> nombre de secondes qu'il reste
var num1=Math.floor(num/60);                 //3700/60 -> le nb de minutes =61,7 -> on veut le reste, car 61,7min =1h et 1min
var num2=(num1%60);                          //61,7%60 -> le reste de la division = 1 (arrondi) -> 1min restante
var num3=Math.floor(num1/60);                //61,7/60 =1 (arrondi) -> 1h
var num4 = (num3%24);
var num5 = Math.floor(num/86400)

return [num5 + ':' + num4 + ':' + num2 + ':' + num0];    // ici, le '+' signifie une concaténation et non une addition.
}
console.log(timeConvert(180020));

//ok