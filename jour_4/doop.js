var array = process.argv;
console.log(process.argv);
// array est le tableau process.argv affiché dans la console
// affiche : ['infos de node', 'info de doop.js', 2', '3']
// c'est un tableau qui possède 4 arguments

var arg1 = process.argv[2];
console.log(arg1);
// arg1 est égal à l'index 2 de mon tableau process.argv
// arg1 est donc égal à mon 1er argument que j'ai noté dans ma console (ici 6)
// grace à process.argv[2], je lui dis de sortir l'argument qui a l'index 2 du tableau


var arg2 = process.argv[3];
console.log(arg2);
// arg2 est égal à l'index 3 de mon tableau process.argv
// arg2 est donc égal à mon 2e argument que j'ai noté dans ma console (ici 4)
// grace à process.argv[3], je lui dis de sortir l'argument qui a l'index 3 du tableau


/* OR on sait que process.argv transforme tous les arguments qu'on
 lui indique dans la console comme étant des strings (même les nb)
 donc on sait que pour l'instant, num1 et num2 sont des strings 
 */

 var int1 = parseInt(arg1);
 var int2 = parseInt(arg2);
 // je transforme arg1 et arg2 (6 et 4) en number

console.log(int1 + int2)

/* process.argv(function doop(int1, int2){
    int1 + int2
})
console.log(process.argv); */



//


var sum = 0;

for (var i = 2; i < process.argv.length; i++) {

    // sum = sum+(process.argv[i]); this treats sum as an array and pushes (process.argv[i]); to the array!!!???!!!
    sum = sum + Number(process.argv[i]);
}

console.log(sum);