

function isEven(num){
    if(num%2 == 0){  
        /* si le reste de la division num/2 est égal à 0 
        (num est divisible par 2 donc nombre pair) 
        -> "num%2=" ca veut dire qu'on veut le reste 
        de la division num/2 */
        return 'true';
    }
    else{ 
        //si le reste de num/2 n'est pas égal à 0 (si num)
        return 'false';
    }
};

console.log(isEven(3));