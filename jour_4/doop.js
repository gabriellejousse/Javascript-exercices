

// ADDITION :

function doop1(arg1, arg2) {

    var adding = parseInt(process.argv[2]) + parseInt(process.argv[3]);
    return adding;

}
console.log(doop1(process.argv[2], process.argv[3]))



// MULTIPLICATION : 

var arg1 = process.argv[2];
var arg2 = process.argv[3];
// pas obligé de déclarer 

function doop2(arg1, arg2) {

    var multiply = parseInt(arg1) * parseInt(arg2);

    return multiply;
}
console.log(doop2(arg1, arg2));



// SOUSTRACTION : 

function doop3(arg1, arg2) {

    var sub = parseInt(arg1) - parseInt(arg2);

    return sub;
}
console.log(doop3(arg1, arg2));



// OK