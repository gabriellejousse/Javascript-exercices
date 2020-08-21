function isPalindrome(str) {
    var str;
    var strReverse = "";
    //strReverse sera de type string - elle contiendra la str à l'envers
    var strNoSpace = str.replace(/ /gi, "");
    //  Nouvelle variable qui contiendra str SANS les espaces (utilisation du regex)
    // regex ci dessus : on veut remplacer les espaces par 0 espace.
    var reverseNoSpace = strReverse.replace(/ /gi, "");
    //  Nouvelle variable qui contiendra strReverse SANS les espaces (utilisation du regex)
    // regex ci dessus : on veut remplacer les espaces par 0 espace.


    for (var i = strNoSpace.length; i >= 0; i--) {
        // boucle qui part de la fin de la strNoSpace, 
        // qui continue jusqu'à atteindre l'index 0 (début de la string) 
        // et qui décrémente l'indice de -1 a chaque tour de boucle (i--)
        reverseNoSpace = reverseNoSpace + strNoSpace.charAt(i);
        // on définit reverseNoSpace :
        // reverseNoSpace est égal à strNoSpace lue à l'envers 

    }

    //console.log(strNoSpace);
    // console.log(reverseNoSpace);
    if (strNoSpace === reverseNoSpace) {

        return "true";
    } else {
        return "false";
    };


}
console.log(isPalindrome("never odd or even"));

// OK sauf sur le "never odd or even"