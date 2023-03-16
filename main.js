// import ES6 Modules
// Game play happens here

import Card from "./components/card.js"
import Deck from "./components/deck.js"
import Player from "./components/player.js"
import Dealer from "./components/dealer.js"
import { handScorer } from "./components/scoreHandler.js"


// push card from deck array to player hand
const playerHit = (player, dealer) => {
    player.hand.push(dealer.deck.cards.pop());
}

// push card from deck array to dealer hand
const dealerHit = (dealer) => {
    dealer.hand.push(dealer.deck.cards.pop());
}

// compare dealer hand value to player hand value
const checkWinner = (player, dealer) => {
    const winnerColor = "color: green; font-size: 18px";
    const winnerMessage = '%c Hooooray! You won!'
    const loserColor = "color: red; font-size: 18px";
    const loserMessage = '%c The dealer won.';
    const tie = "%c You tied!"

    if (player.handTotal <= 21 && dealer.handTotal < player.handTotal || player.handTotal <= 21 && dealer.handTotal > 21) {
        // player hand wins
        console.log(winnerMessage, winnerColor);
    } else if (player.handTotal < dealer.handTotal && dealer.handTotal <= 21 || player.handTotal > 21 && dealer.handTotal <= 21) {
        // dealer hand wins
        console.log(loserMessage, loserColor);
    } else if (player.handTotal === dealer.handTotal) {
        // results in tie
        console.log(tie, loserColor);
    }

}

// IIFE
(async () => {
    // get player name and create player
    // if name isn't provided default to player
    // how to default to player if name isn't provided
    let nameOfPlayer;
    await new Promise((resolve) => setTimeout(() => resolve(nameOfPlayer = prompt("What's your name boss?", "Player 1")), 500));
    let player = new Player(nameOfPlayer);

    // if alert cancel button is pressed => returns 'null'
    // sets player name to "Player 1"
    if (nameOfPlayer === null) {
        player = new Player('Player 1')
    }

    //initial game play set to no
    // loop through prompt until player inputs 'y' or 'yes'
    let readyToPlay = "N"
    do {
        readyToPlay = prompt("Are you ready to play blackjack?", "Yes").toUpperCase();
    } while (readyToPlay === "N" || readyToPlay === "NO");

    // guarded clause
    if (readyToPlay !== "Y" && readyToPlay !== "YES") return;
    let dealerColor = "color: #1640C9; font-size: 18px";
    let playerColor = "color: #D5C71B; font-size: 18px"


    // init dealer and deal cards to player
    const dealer = new Dealer();
    dealer.deal(player);
    let hiddenCard = 'HIDDEN CARD';

    let playerCard1 = `Card 1: ${player.hand[0].value} of ${player.hand[0].suit}`;
    let playerCard2 = `Card 2: ${player.hand[1].value} of ${player.hand[1].suit}`;
    let playerHandValue = player.handTotal;
    let playerHand = `%c ${player.name} has: \n [${playerCard1}] and \n [${playerCard2}]; \n Hand value: ${playerHandValue}`;

    let dealerCard1 = `Card 1: ${hiddenCard}`;
    let dealerCard2 = `Card 2: ${dealer.hand[1].value} of ${dealer.hand[1].suit}`;
    let dealerHandValue = dealer.handTotal - dealer.hand[0].value;
    let dealerHand = `%c ${dealer.name} has \n [${dealerCard1}] and \n [${dealerCard2}]; \n Hand value: ${dealerHandValue}`;


    await new Promise((resolve) => setTimeout(() => resolve(console.log(dealerHand, dealerColor)), 1000));
    await new Promise((resolve) => setTimeout(() => resolve(console.log(playerHand, playerColor), console.log("-----------------")), 1500));

    const hitOrStay = prompt("Would you like to hit or stay?", "Stay").toUpperCase();

    if (hitOrStay === 'HIT') {
        dealerCard1 = `Card 1: ${dealer.hand[0].value} of ${dealer.hand[0].suit}`;
        dealerHandValue = dealer.handTotal;
        dealerHand = `%c ${dealer.name} has \n [${dealerCard1}] and \n [${dealerCard2}] \n Hand value: ${dealerHandValue}`;

        playerHit(player, dealer);
        let playerCard3 = `Card 3: ${player.hand[2].value} of ${player.hand[2].suit}`;
        playerHandValue = player.handTotal;
        playerHand = `%c ${player.name} has \n [${playerCard1}], \n [${playerCard2}] and \n [${playerCard3}] \n Hand value: ${playerHandValue}`;

        console.log(dealerHand, dealerColor);
        console.log(playerHand, playerColor);
        console.log("-----------------");

        checkWinner(player, dealer);

    } else {
        dealerHit(dealer)
        dealerCard1 = `Card 1: ${dealer.hand[0].value} of ${dealer.hand[0].suit}`;
        let dealerCard3 = `Card 3: ${dealer.hand[2].value} of ${dealer.hand[2].suit}`;
        dealerHandValue = dealer.handTotal;
        dealerHand = `%c ${dealer.name} has \n [${dealerCard1}], \n [${dealerCard2}] and \n [${dealerCard3}] \n Hand value: ${dealerHandValue}`;

        console.log(dealerHand, dealerColor);
        console.log(playerHand, playerColor);
        console.log("-----------------");

        checkWinner(player, dealer);
    }
})();
