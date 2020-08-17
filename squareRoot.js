
function squareRoot(num){

    if(Number.isInteger(num**0.5)){ // pour faire une puissance : **

   return num**0.5;

    } else{
        return '0';
    }
};

console.log(squareRoot(4));