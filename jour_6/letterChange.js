function letterChange2(str) {
    var strModified = '';
    var result = '';

    for (i = 0; i < str.length; i++) {
        strAscii = str.charCodeAt(i);
        //console.log(strAscii)

        // on converti tout l'alphabet en la lettre suivante (sauf les lettres précédant les voyelles (d, h, n, t, x)):
        if ((strAscii > 65 && strAscii <= 67) || (strAscii >= 69 && strAscii <= 71)
            || (strAscii >= 73 && strAscii <= 77) || (strAscii >= 79 && strAscii <= 83) || (strAscii >= 85 && strAscii <= 87)
            || (strAscii == 89)
            || (strAscii >= 97 && strAscii <= 99) || (strAscii >= 101 && strAscii <= 103) || (strAscii >= 105 && strAscii <= 109)
            || (strAscii >= 111 && strAscii <= 115) || (strAscii >= 117 && strAscii <= 119) || (strAscii == 121)) {

            strModified = strAscii + 1;
            result += String.fromCharCode(strModified);

            // convertir les lettres précédant les voyelles (d, h, n, t, x) en la lettre suivante (voyelles) puis les passer en maj :
        } else if (strAscii == 68 || strAscii == 72 || strAscii == 78 || strAscii == 84 || strAscii == 88
            || strAscii == 100 || strAscii == 104 || strAscii == 110 || strAscii == 116 || strAscii == 120) {

            strModified = strAscii + 1;
            result += String.fromCharCode(strModified).toUpperCase();

            // convertir les Z et z en A et a, puis les passer en majuscules
        } else if ((strAscii == 90) || (strAscii == 122)) {

            strModified = strAscii - 25;
            result += String.fromCharCode(strModified).toUpperCase();

            // on reconverti les char spéciaux comme ils étaient avant:
        } else {
            result += String.fromCharCode(strAscii);
        }
    }

    return 'return:  ' + result;
}


console.log(letterChange2('fun times!'))

// OK !!