function isPalindrome(str){
var str;
var strReverse = "";

    for(var i = str.length; i >= 0; i --){
        strReverse = strReverse + str.charAt(i);
    // on a bien le str à l'envers 
    }


    if(str === strReverse){
        return "true";
    } else{
        return "false";
    };


}
console.log(isPalindrome(" na oo an"));

// OK sauf sur le "never odd or even"