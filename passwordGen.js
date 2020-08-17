var num;
var alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password='';

function passwordGen(num){
    
var password=Math.random(alphabet);

if ((password.length() >=6) && (password.length()<=15)) {
    for( var i=6; i<=15 ; i++ ){
        //
    }

    return password ;

}else{

    return 'error';
    
}
console.log(password.toUpperCase())
}
console.log(passwordGen(3)); 


//marche pas 