function letterCapitalize(sentence){

    var sentence='';
    var arr= sentence.split('');

    for (var i=0; i<sentence.length; i++) {
        if (arr[i] === arr[i].toUpperCase()){
            arr[i] = arr[i].toLowerCase();
        }
    }
    
};

console.log(arr.join(''));

console.log(letterCapitalize('Under my Umbrella'));

