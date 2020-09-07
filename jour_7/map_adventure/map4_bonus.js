var arr = [1, 2, 3, 4];

var arr2 = arr.map(function isEven(elem){
        if(elem%2 == 0){  
            return 'true';
        }
        else{ 
            return 'false';
        }
})
console.log(arr2)


// OK


/* function isEven(num){
    if(num%2 == 0){  
        return 'true';
    }
    else{ 
        return 'false';
    }
};

console.log(isEven(3)); */