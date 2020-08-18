//ma version:

function checkNums(num1,num2) {
    if(num1>num2){
        console.log('num1 is greater than num2');
    } else if(num1==num2){
        console.log('equal');
    } else{
        console.log('num1 is lower than num2'); //une condition ne peut pas se terminer par else if mais par else
    }


};

checkNums(1,4);

//pas besoin de déclarer les variable au début, elles sont déclarées ...
//...quand on appellela fonction à la fin


//version corrigée (dans la consigne:utiliser les return):

function checkNums(num1,num2){
    if(num1>num2){
        return 'num1 is greater than num2';
    } else if (num1<num2){
        return 'num1 is lower than num2';
    } else {
        return 'equal';
    }
};

console.log(checkNums(1,4));