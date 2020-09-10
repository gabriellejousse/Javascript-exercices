var request = require("request");

request.get('https://api.chucknorris.io/jokes/random', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the url link


  // sert à convertir les infos du site en objet (string devient -> objet)
  // on pourra donc utiliser les propriétés de l'objet  (pas possible si le body reste en string):
 var arrJson = JSON.parse(body)
 //console.log(arrJson)


  // on affiche le result qui est la propriété de la key "value"
  // (la blague est la propriété de la clé "value")
  var result = arrJson["value"];
  console.log(result)


});

// OK