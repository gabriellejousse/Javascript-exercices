
function squareRoot(a){
    var x,
    x1=a/2;
    do{
        x=x1;
        x1=(x+(a/x))/2;
    }
   while (x !== x1);
   return x;
        

};

console.log(squareRoot(25));