var request = require('request');

request.get('https://restcountries.eu/rest/v1/all', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the url link


  // sert à convertir le body (ttes les infos du site) en objet (string devient -> objet)
  // on pourra donc utiliser les propriétés de l'objet  (pas possible si le body reste en string):
  var arrJson = JSON.parse(body)
  //console.log(arrJson)


  // parcourir tout arrJson et afficher uniquement les keys "name", séparées par des tirets:
  for (var i = 0; i < arrJson.length - 1; i++) {
    //console.log(arrJson[i])
    var result = arrJson[i]["name"] + " - " + arrJson[i + 1]["name"];
    console.log(result)
  }

});


/* var request = require("request")

console.log('#1');
request.get('https://restcountries.eu/rest/v1/all', function (err, res, body) {
    console.log('#2');

    var result = JSON.parse(body);
    console.log('name', result[0].name);
    console.log('capital', result[0].capital);
});
console.log('#3'); */