var request = require('request');

request.get('https://restcountries.eu/rest/v1/all', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the url link


  // sert à convertir les infos du site en objet (string devient -> objet)
  // on pourra donc utiliser les propriétés de l'objet  (pas possible si le body reste en string):
  var arrJson = JSON.parse(body)
  //console.log(arrJson)


  // parcourir tout arrJson et afficher uniquement les keys "name", séparées par des tirets:
  for (var i = 0; i < arrJson.length - 1; i++) {
    //console.log(arrJson[i])
    var result = arrJson[i]["name"] + " \n - ";
    console.log(result)
  }

});

// OK