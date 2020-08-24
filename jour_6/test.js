var now = new Date();
console.log(now);
// va donner la date et l'heure au GMT 0
// affiche : 2020-08-22T16:09:04.156Z

var now = Date();
console.log(now);
// va donner la date et l'heure au GMT +02 (heure de France)
// affiche : Sat Aug 22 2020 18:09:56 GMT+0200 (GMT+02:00)

/* Si le constructeur Date() est utilisé sans arguments, il retournera la date et heure actuelle. */

// On peut aussi lui donner des dates personnalisées:

var dateOfBirth = new Date("September 24, 1994 16:05:00");
console.log("my birthday is:" + dateOfBirth.toString());
// affiche : "my birthday is:Sat Sep 24 1994 16:05:00 GMT+0200 (GMT+02:00)"


var dateOfBirth = new Date("September 24, 94 16:05:00");
console.log(dateOfBirth.getMonth());
// affichera : 8
// C'est septembre - 1 (.getMonth() affiche le mois de 0 à 11, selon la date écrite sur l'ordi)


var dateOfBirth = new Date("September 24, 94 16:05:00");
console.log(dateOfBirth.getFullYear());
// affichera :1994 
// .getFullYear() affiche l'année en 4 chiffres selon la date qu'on lui a spécifié