

function ageCalculator(birthDate) {

    var arg = new Date(birthDate);
    // on déclare l'argument birthDate comme étant une date

    var birthYear = arg.getFullYear();
    console.log(birthYear);
    // birthYear = 1994 (l'année de la date qui est en argument)

    var dateToday = new Date();
    // on veut la date d'aujourd'hui
    var todayYear = dateToday.getFullYear();
    console.log(todayYear)
    // on sélectionne uniquement l'année de la date d'aujourd'hui

    var age = todayYear - birthYear;
    // pour connaître l'âge, on fait 2020 - année de naissance

    return age;
}
console.log(ageCalculator('1994-09-24'));

// OK