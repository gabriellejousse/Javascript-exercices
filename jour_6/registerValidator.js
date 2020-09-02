var prompt = require('prompt');

var properties = [
    {
        name : 'username',
        validator : /^[a-zA-Z\d\-]+$/
    },
    {
        name : 'password',
        validator : /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z-0-9\.\-\,]{6,}$/
        // la syntaxe (?=.*[a-zA-Z]) veut dire : il faut AU MOINS une lettre
        // pareil pour (?=.*[0-9]) veut dire : il faut AU MOINS un chiffre
        // la syntaxe [a-zA-Z-0-9\.\-\,] veut dire : on autorise tous ces caractères (lettres maj/lettres min/chiffre/ . / , / -)
        // la syntaxe {6,} veut dire qu'on veut au moins 6 caractères à partir des caractères autorisés ci-dessus
    },
    {
        name : 'email',
        validator : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    }
];


prompt.start();


prompt.get(properties, function (err, result) {
    if (err) {
        return 'error';
    } else {
        console.log('OK')
    }
});