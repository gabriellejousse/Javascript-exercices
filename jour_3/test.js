
function isPalindrome(str) {
    var str;
    var strReverse = [];
    var tabStr = str.split("");
    
    for (var i = tabStr.length; i >= 0; i--) {
        strReverse = strReverse + tabStr.indexOf(i);

    }


    if (tabStr === strReverse) {
        return "true";
    } else {
        return "false";
    };


}
console.log(isPalindrome("kayak"));

// OK sauf sur le "never odd or even"