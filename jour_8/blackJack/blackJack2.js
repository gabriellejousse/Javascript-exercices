// déclarer une variable joueur = 0;
// déclarer une variable banque qui est un nombre aléatoire entre 16 et 21

// dans la fonction : 

// SI le joueur répond YES au prompt "card?" -> lancer un nombre aléatoire entre 1 et 11
// ce nombre aléatoire sera ajouté à la variable joueur (=0 au départ)
// SI le score de la nouvelle variable joueur > 21, le joueur perd ("you lose + afficher le score de la banque")
// SI le score est <= 21 on ajoute le score à la variable joueur et le jeu repropose "card ?"

// ou SI le joueur répond NO au prompt "card?" -> la partie est finie

// quand la partie est finie (quand le joueur répond "no"):

// SI la variable joueur > 21 -> le joueur perd
// -> affiche "you lose + afficher le score de la banque"
// ou SI la variable joueur < à la variable banque -> il perd
// -> affiche "you lose + afficher le score de la banque"
// ou SI la variable joueur == à la variable banque, le joueur perd
// -> affiche "you lose + afficher le score de la banque"

// SI la variable joueur == 21 -> le joueur fait un blackJack et gagne 
// -> affiche "The bank had 'score de la banque'! You beat the bank! You win."
// ou SI la variable joueur > à la variable banque (nb aléatoire entre 16 et 21) -> le joueur gagne
// -> affiche "The bank had 'score de la banque'! You beat the bank! You win."

var prompt = require('prompt');

prompt.start();

var scorePlayer = 0;

var minCard = 1;
var maxCard = 11;
var card = Math.floor(Math.random() * (maxCard - minCard + 1)) + minCard;

var minBank = 16;
var maxBank = 21;
var bank = Math.floor(Math.random() * (maxBank - minBank + 1)) + minBank;
console.log(bank)

function displayPrompt() {
    prompt.get({name : 'q', description :'Card ? type yes or y for a new card'}, function (err, result) {

        // si le joueur écrit 'yes' ou 'y', on entre dans ces conditions : 
        if (result['q'] === 'yes' || result['q'] === 'y') {

            console.log('random card score is : ' + card);
            console.log('new scorePlayer : ' + (scorePlayer += card))
            //console.log('Your score is ' + (scorePlayer += card));
            //console.log('card : '+ (scorePlayer += card))

            // si le score du joueur est > 21 -> le joueur perd et la fonction s'arrête :
            if (scorePlayer > 21) {
                console.log('You lose, the bank had ' + bank)
                // return -> pour sortir de la fonction quand le joueur perd :
                return;

                // si le score du joueur est < 21 -> on repropose de tirer une carte aléatoire et donnera les résultats selon les conditions suivantes:
            } else if (scorePlayer < 21) {
                displayPrompt();
                card = Math.floor(Math.random() * (maxCard - minCard + 1)) + minCard;
                console.log('new random card : ' + card)
                console.log('Your score is ' + (scorePlayer + card));

                // si la nouvelle carte aléatoire + le nouveau score sont = à 21 -> blackjack !
                if ((scorePlayer + card) === 21) {
                    console.log('Blackjack ! You beat the bank');
                    return;

                // si la nouvelle carte aléatoire + le nouveau score sont supérieurs à la bank et inférieurs à 21 -> le joueur gagne
                } else if (((scorePlayer + card) > bank) && ((scorePlayer + card) < 21)) {
                    console.log('The bank had : ' + bank + ' You beat the bank! You win.');
                    return;

                // si la nouvelle carte aléatoire + le nouveau score sont supérieurs à 21 -> le joueur perd
                } else if ((scorePlayer + card) > 21) {
                    console.log('You lose, the bank had ' + bank);
                    return;
                }
            }

        // si on entre 'no' : on  affiche le score, et le résultat (gagné ou perdu):
        } else if (result['q'] === 'no') {

            if (((scorePlayer + card) > bank) && ((scorePlayer + card) < 21)) {
                console.log('The bank had : ' + bank + ' You beat the bank! You win.');
                return;
            } else if ((scorePlayer + card) < bank) {
                console.log('You lose, the bank had ' + bank)
            } else if ((scorePlayer + card) === 21) {
                console.log('Blackjack ! You beat the bank');
                return;
            } else if (((scorePlayer + card) > bank) && ((scorePlayer + card) > 21)) {
                console.log('You lose, the bank had ' + bank);
                return;
            }
        
        }
        
    }
    )
};
displayPrompt();
