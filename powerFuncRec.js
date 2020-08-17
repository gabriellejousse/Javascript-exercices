

function powerFuncRec(num,power){
var i=3;
var result=num*power*i;
console.log(num*power*i);
return result; 
//toujours mettre le return à la fin de la fonction. 
//Car il retourne uniquement ce qu'il y a au dessus de lui
};

powerFuncRec(3,3);