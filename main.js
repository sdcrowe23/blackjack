// import ES6 Modules
// Game play happens here

import Card from "./components/card.js"
import Deck from "./components/deck.js"
import Player from "./components/player.js"
import Dealer from "./components/dealer.js"
import { handScorer } from "./components/scoreHandler.js"

/*

1. Player answers prompt to start game
2. Two cards are dealt to player and dealer (dealer card(1) is hidden)
3a. Player has option to 'hit' or 'stay'
3b. If player chooses to 'hit', card is dealt to player (player hand total value is updated)
3c. if player chooses to 'stay' then the dealers is dealt another card (dealer hand total value is updated minus hidden card)
3d. Dealer card is revealed
4. Dealer hand value is compared with the player hand value
5. Display win/lose browser console message to player
6. Ask if the player wants to play again? (repeat steps)

*/


const playerHit = (player, dealer) => {
    player.hand.push(dealer.deck.cards.pop());
}

const dealerHit = (dealer) => {
    dealer.hand.push(dealer.deck.cards.pop());
}

const checkWinner = (player, dealer) => {
    if (player.handTotal <= 21 && player.hand > dealer.handTotal) {
        console.log('Hooooray! You won!')
    } else {
        console.log('Boo! The dealer won.')
    }
}

// IIFE
(async () => {
    const nameOfPlayer = prompt("What's your name boss?");
    let player = new Player(nameOfPlayer);

    let readyToPlay = "N"
    do {
        readyToPlay = prompt("Are you ready to play blackjack?").toUpperCase();
    } while (readyToPlay === "N" || readyToPlay === "NO");


    if (readyToPlay !== "Y" && readyToPlay !== "YES") return;

    const dealer = new Dealer();
    console.log(dealer)
    dealer.deal(player);
    let hiddenCard = 'HIDDEN CARD';

    let playerCard1 = `Card 1: ${player.hand[0].value} of ${player.hand[0].suit}`;
    let playerCard2 = `Card 2: ${player.hand[1].value} of ${player.hand[1].suit}`;
    let playerHandValue = player.handTotal;
    let playerHand = `${player.name} has [${playerCard1}] and [${playerCard2}]; Hand value: ${playerHandValue}`;

    let dealerCard1 = `Card 1: ${hiddenCard}`;
    let dealerCard2 = `Card 2: ${dealer.hand[1].value} of ${dealer.hand[1].suit}`;
    let dealerHandValue = dealer.handTotal - dealer.hand[0].value;
    let dealerHand = `${dealer.name} has [${dealerCard1}] and [${dealerCard2}]; Hand value: ${dealerHandValue}`;


    await new Promise((resolve) => setTimeout(() => resolve(console.log(dealerHand)), 1500));
    await new Promise((resolve) => setTimeout(() => resolve(console.log(playerHand), console.log("-----------------")), 1000));

    const hitOrStay = prompt("Would you like to hit or stay?")

    if (hitOrStay === 'hit') {
        dealerCard1 = `Card 1: ${dealer.hand[0].value} of ${dealer.hand[0].suit}`;
        dealerHandValue = dealer.handTotal;
        dealerHand = `${dealer.name} has [${dealerCard1}] and [${dealerCard2}]; Hand value: ${dealerHandValue}`;

        playerHit(player, dealer);
        const playerCard3 = `Card 3: ${player.hand[2].value} of ${player.hand[2].suit}`;
        playerHandValue = player.handTotal;
        playerHand = `${player.name} has [${playerCard1}], [${playerCard2}] and [${playerCard3}] Hand value: ${playerHandValue}`;

        console.log(playerHand);
        console.log(dealerHand);
        console.log("-----------------");

        checkWinner(player, dealer);

    } else {
        dealerHit(dealer)
        dealerCard1 = `Card 1: ${dealer.hand[0].value} of ${dealer.hand[0].suit}`;
        let dealerCard3 = `Card 3: ${dealer.hand[2].value} of ${dealer.hand[2].suit}`;
        dealerHandValue = dealer.handTotal;
        dealerHand = `${dealer.name} has [${dealerCard1}], [${dealerCard2}] and [${dealerCard3}]; Hand value: ${dealerHandValue}`;

        console.log(playerHand);
        console.log(dealerHand);
        console.log("-----------------");

        checkWinner(player, dealer);
    }
})();
