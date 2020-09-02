function test(date1, date2) {
  // transformer les string en arguments en format objet date qui pourra être décortiqué par les méthodes Date:
  var date1 = new Date(process.argv[2]);
  var date2 = new Date(process.argv[3]);

  // on converti les données jour/heures/minutes/secondes de la date1 en SECONDES :
  var day1 = date1.getDate() * 86400;
  var hours1 = date1.getHours() * 3600;
  var minutes1 = date1.getMinutes() * 60;
  var seconds1 = date1.getSeconds();

  // on converti les données jour/heures/minutes/secondes de la date2 en SECONDES :
  var day2 = date2.getDate() * 86400;         // 86400 est le nb de secondes dans 1 jour
  var hours2 = date2.getHours() * 3600;       // 3600 est le nb de secondes dans 1 heure
  var minutes2 = date2.getMinutes() * 60;     // 60 est le nb de secondes dans 1 minute
  var seconds2 = date2.getSeconds();

  // on additionne toutes les données converties en minutes : 
  var totalDay1 = day1 + hours1 + minutes1 + seconds1;
  var totalDay2 = day2 + hours2 + minutes2 + seconds2;

  // on veut la différence entre les totals des minutes de la date 1 et de la date 2 :
  var difference2Days = totalDay2 - totalDay1;
  // console.log('minutes totales jour 2   -   minutes totales jour 1 =   ' + difference2Days )

  
  // on reconvertit les données DE LA DIFFÉRENCE ENTRE LES DEUX DATES pour les répartir en seconde/minutes/heure/jour :
  // les commentaires à droite sont pour l'exemple : "December 27, 1987 11:20:00" "December 28, 1987 10:30:24"
  var difference2Days;
  var resteSeconds = (difference2Days % 60);          // = 24
  var nbMinutes = Math.floor(difference2Days / 60);   // = 1390
  var resteMinutes = (nbMinutes % 60);                // = 10
  var nbHeures = Math.floor(nbMinutes / 60);          // = 23
  var resteHeures = (nbHeures % 24);                  // = 23
  var nbJours = Math.floor(difference2Days / 86400)   // = 0


  return 'Days passed: ' + nbJours + '  Hours passed: ' + resteHeures + '  Minutes passed: ' + resteMinutes + '  Seconds passed: ' + resteSeconds;
}

console.log(test(process.argv[2], process.argv[2]))