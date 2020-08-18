// un objet est un élément qui possède plusieurs propriétés qui le caractérisent
// chaque propriété définit une caractéristique de l'objet
// une propriété peut être une action qu'exécute l'objet ou une information sur lui

/* SYNTAXE */

var objet = {
    key1 : 'valeur',
    key2 : 'valeur',
    key3 : 'valeur'
    // ...
};
    // les propriétés d'un objet s'écrivent toujours entre des {}
    // les valeurs peuvent être des nombres, des string, des tableaux, d'autres objets...
//ex:
var stylo = {
    type: "bille",
    couleur: "bleu",
    taille : 2.5
    // ...
};
console.log(stylo);
    // la ligne ci-dessus définit un objet nommé "stylo"
    // cet objet possède 3 propriétés (type, couleur, taille)
    // chaque propriété possède une valeur et est séparée par une virgule (sauf la derniere)
    // le résultat sera : { type: 'bille', couleur: 'bleu', taille: 2.5 }



/* ACCÉDER AUX PROPRIÉTÉS D'UN OBJET - monObjet.maPropriete */

var calendrier = {
    mois1 : "janvier",
    mois2 : "février",
    mois3 : "mars"
}
console.log(calendrier.mois2);
    // ici, je veux accéder à la deuxième propriété de mon objet (mois2)
    // il faut écrire le nom de l'objet et la propriété voulue séparés par un point(calendrier.mois2)




/* MODFIER UN OBJET en AJOUTANT UNE KEY+VALEUR - monObjet.maPropriete = nouvelle valeur */

    // on peut modifier les valeurs des propriétés avec la syntaxe :
    // monObjet.maPropriete = nouvelle valeur

// exemple:

var calendrier = {
    mois1 : "janvier",
    mois2 : "février",
    mois3 : "mars"
}
calendrier.mois4 = "avril"; // je rajoute une nouvelle key "mois4" avec une nouvelle valeur "avril"
console.log(calendrier);

    // le résultat affiché sera : { mois1: 'janvier', mois2: 'février', mois3: 'mars', mois4: 'avril' }




/* PROGRAMMER LES OBJETS */

// dans un jeu vidéo de rôle, chaque personnage a de nombreuses caractéristiques.
// mise en situation : 

var milla = {
    nom : "Milla",
    sante : 150,
    force : 25
};
// ici le personnage Milla est représentée par un objet "milla" qui lui donne 3 caractéristiques (keys)
// ces keys ont chacune une valeur qui définissent l'état du personnage a un moment précis

console.log('Milla est blessée par une flèche');
console.log( milla.sante = milla.sante - 25);
// la propriété 'sante' du personnage a été réduite de 25

console.log("Milla a trouvé un bracelet de force");
console.log(milla.force = milla.force + 50 );
// la propriété 'force' du personnage a été augmentée de 50




/* LA NOTION DE MÉTHODE */

// dans le programme du personnage ci-dessus, il y a bcp de console.log, ce qui n'est pas une bonne chose
// on va se servir d'une fonction pour le simplifier :

var milla = {
    nom : "Milla",
    sante : 150,
    force : 25
};

function decrire (personnage){
     return `${personnage.nom} a ${personnage.sante} points de vie et ${personnage.force} en force`;
}
console.log(decrire());

    //ou

function decrire (personnage){
     return milla.nom + ' a ' + milla.sante + " de santé et " + milla.force + " de force";
}
console.log(decrire());



/* CLASSES - class */

/* SYNTAXE */

    // le nom de la class est la plupart du temps avec une majuscule (ici Personnage)
    // contrairement aux objets basiques, on sépare les éléments par un point virgule (et non une virgule)
    // une classe ne contient que des définitions de METHODES 
    // "this" représente dans une méthode l'objet sur lequel la méthode est appelée
    // la méthode spéciale "constructor()" peut être ajoutée dans la class.
    // elle sert à ajouter des données à l'objet, sous forme de propriétés :

class MaClasse {
    constructor(/*param1, param2*/){
        /*this.propriete1 = param1;*/
        /*this.propriete2 = param2;*/
    }
    methode1(   ){

    }
    methode2(  ){

    }
};
/* var nouvelObjet = new MaClasse(param1 de nouvelObjet, param2 de nouvelObjet):*/ 
// syntaxe de l'instanciation : ligne var NouvelObjet ci-dessus
// l'instanciation sert à créer de nouveaux objets (ici: nouveaux personnages)
// sans avoir a recréer un objet de toute pièce




class Personnage {
    constructor(nom, sante, force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }
    decrire(){
        return this.nom + ' a ' + this.sante + " de santé et " + this.force + " de force  ";
    } 
}
    
// exemple INSTANCIATION :

// -> la création de nouveaux objets à partir d'une classe s'appelle l'instanciation:
var aurora = new Personnage("Aurora", 150, 25);
var milo = new Personnage("Milo", 160, 40);

console.log(aurora.decrire());
console.log(milo.decrire());
// ces deux lignes confirment que ces deux personnages ont été ajoutés à la  fonction
// résultat : "Aurora a 150 de santé et 25 de force" et "Milo a 160 de santé et 40 de force  "  


