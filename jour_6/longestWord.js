
// on split la str en array de mots
// on explore l'array de mots avec une boucle for
// on compte la length de chaque valeur/mot du tableau
// 

function longestWord(str){
    var arr = str.split(" ");
    console.log(arr);

    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
       
    }
}
console.log(longestWord('I love dogs'))



// var arr = ['you', 'are', 'the', 'best'];
// var count = arr[3].length;

// console.log(count)