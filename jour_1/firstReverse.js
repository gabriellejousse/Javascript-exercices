function firstReverse(str){
    var result = '';
    for(var i = str.length; i >= 0; i --){
        result = result + str.charAt(i);
    }
    return result;
};
console.log(firstReverse('hello'));

// OK