// Updated logic for main.js


import Card from "./components/card.js"
import Deck from "./components/deck.js"
import Player from "./components/player.js"
import Dealer from "./components/dealer.js"
import { handScorer } from "./components/scoreHandler.js"


const checkForAce = (player) => {
    let playerCards = player.hand;

    for (let i = 0; i < playerCards.length; i++) {
        if (playerCards[i].values.value === 'A' && player.handTotal(player) < 11) {
            playerCards.values.weight = 11;
        } else {
            playerCards.values.weight = 1;
        }
    }
}

const showCards = (player) => {
    let playerCards = player.hand;
    let playerTotal = player.handTotal(player);
    let cards = "";

    console.log(`${player.name}'s hand:`, playerTotal);


    for (let i = 0; i < playerCards.length; i++) {
        cards += `card ${i + 1}: ${playerCards[i].values.value} of ${playerCards[i].suits}, weight: ${playerCards[i].values.weight}\n`;
    }
    console.log(cards);

    return;
}

const dealerHit = (dealer, fnc) => {
    dealer.hand.push(dealer.deck.cards.pop());
    fnc(dealer);
    return;
}

const playerHit = (player, dealer, fnc) => {
    player.hand.push(dealer.deck.cards.pop());
    fnc(player);
    return;
}

const checkWinner = (player, dealer) => {
    const winnerMessage = 'Hooooray! You won!'
    const loserMessage = 'The dealer won.';
    const tie = "You tied!"
    let playerHandTotal = player.handTotal(player);
    let dealerHandTotal = dealer.handTotal(dealer);

    if (playerHandTotal === 21 && dealerHandTotal !== 21 || playerHandTotal < 21 && dealerHandTotal > 21 || playerHandTotal < 21 && playerHandTotal > dealerHandTotal) {
        console.log(winnerMessage);
    } else if (playerHandTotal !== 21 && dealerHandTotal === 21 || playerHandTotal > 21 && dealerHandTotal < 21 || dealerHandTotal < 21 && dealerHandTotal > playerHandTotal) {
        console.log(loserMessage)
    } else if (playerHandTotal > 21 || dealerHandTotal > 21) {
        console.log('Busted!')
    } else {
        console.log(tie)
    }
    return;
}

let getName = prompt("What's your name?", "Jane Doe");

(() => {

    // init dealer, deck and player
    const player = new Player(getName);
    const dealer = new Dealer();
    dealer.deal(player);

    // show initial cards
    showCards(player);
    showCards(dealer);

    let hitOrStay = prompt("Would you like to hit or stay?", "Hit").toUpperCase();

    if (hitOrStay === "HIT") {
        playerHit(player, dealer, showCards)

    } else {
        showCards(player);
    }

    // dealer draws if hand < 16
    if (dealer.handTotal(dealer) < 16) {
        dealerHit(dealer, showCards);
    } else {
        showCards(dealer);
    }

    checkForAce(player);
    checkForAce(dealer);

    checkWinner(player, dealer);

})();