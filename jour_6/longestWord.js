
// on split la str en array de mots
// ['I', 'love', 'dogs']
// on explore l'array de mots avec une boucle for
// on compte la length de chaque valeur/mot du tableau
// 

function longestWord(str){
    var strArr = str.split(" ");
    console.log(strArr);
    var newArr = [];

    for(var i = 0; i < strArr.length ; i++){
        var wordLength = strArr[i].length;      //nombre de lettres dans chaque mot du tableau
        console.log(wordLength)  
        newArr.push(wordLength);
        console.log(newArr)
        var newArrSorted = newArr.sort();
        console.log(newArrSorted)
        var biggerNum = newArrSorted.indexOf(newArrSorted.length)
        console.log(biggerNum)
    }

    return 'return';
}
console.log(longestWord('He apples pie'))



// var arr = ['you', 'are', 'the', 'best'];
// var count = arr[3].length;

// console.log(count)