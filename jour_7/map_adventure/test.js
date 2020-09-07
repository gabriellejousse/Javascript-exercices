var arr = ['cool', 'yesterday'];
var arrToString = arr.join()
console.log(arrToString)
var newArr = arrToString.split('');
console.log(newArr)

var newArrReverse = newArr.reverse();
console.log(newArrReverse)

var newStr = newArrReverse.join();
console.log(newStr)

var newNewArr = newStr.split('');
console.log(newNewArr)

for( var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    console.log(arr.reverse());

}