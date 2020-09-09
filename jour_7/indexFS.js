
var fs = require("fs");

var obj;

fs.readFile("users.json", "utf8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    // pour pouvoir exploiter l'array/objet qui se trouve dans users.json :
    obj = JSON.parse(data);
    console.log(obj)

    // on accède aux propriétés du tableau/objet qu'on a nommé 'obj' : 
    var name1 = obj[0]["name"];
    var email1 = obj[0]["email"]

    var name2 = obj[1]["name"];
    var email2 = obj[1]["email"]

    console.log("Nom: " + name1 + "\nAdresse e-mail: " + email1 + "\n------\n" + "Nom: " + name2 + "\nAdresse e-mail: " + email2);

});







