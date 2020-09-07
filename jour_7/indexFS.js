var fs = require('fs');


fs.writeFile('users.json', 'Nom: Jean Guo \nAdresse Email: jean.guo@konexio.eu', function(err){
    if (err){
        console.log(err);
        return;
    }

})