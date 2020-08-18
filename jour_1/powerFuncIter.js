//pas besoin de déclarer les var au début, on les déclare dans la fonction a la fin
//il faut les mettre dans le même ordre que (num,power)
function powerFuncIter(num,power){
var i=power;
while (i==num){
    console.log(num*power*i); // 3*3*3 (3^3)
    i++; //pour que la boucle ne soit pas infinie
}
};

powerFuncIter(2,2); 


//corrigée (il y a un bug, le résultat donné est 1):

var numbase=3;
var puissance=0

function powerFuncIter(numbase,puissance){

    var result=1;

    for (i=0; i<power ;i++){
    result= result*num
    //1*3=3
    //3*3=9
    //9*3=27
}

    return result 
};

console.log(powerFuncIter(numbase,puissance)); 
//