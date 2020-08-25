

function formatDateToday(str){
    var newDateFormat = str.replace(/\W/g,'/');     
    // /\W/g signifie qu'il cherche tous les caractères qui ne sont pas des mots/lettres ( /\W/ veut dire non-word characters)
    return newDateFormat;
}
    console.log(formatDateToday('2020-09-24'));
    
    // OK