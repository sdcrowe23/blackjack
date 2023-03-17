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
    handScorer(player);
    handScorer(dealer)
    return
}

// push card from deck array to dealer hand
const dealerHit = (dealer) => {
    dealer.hand.push(dealer.deck.cards.pop());
    handScorer(dealer);
    return;
}

// compare dealer hand value to player hand value
const checkWinner = (player, dealer) => {
    const winnerColor = "color: green; font-size: 18px";
    const winnerMessage = '%c Hooooray! You won!'
    const loserColor = "color: red; font-size: 18px";
    const loserMessage = '%c The dealer won.';
    const tie = "%c You tied!"

    if (player.handTotal(player) <= 21 && dealer.handTotal(dealer) < player.handTotal(player) || player.handTotal(player) <= 21 && dealer.handTotal(dealer) > 21) {
        // player hand wins
        console.log(winnerMessage, winnerColor);
    } else if (player.handTotal(player) < dealer.handTotal(dealer) && dealer.handTotal(dealer) <= 21 || player.handTotal(player) > 21 && dealer.handTotal(dealer) <= 21) {
        // dealer hand wins
        console.log(loserMessage, loserColor);
    } else if (player.handTotal(player) === dealer.handTotal(dealer)) {
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
        player = new Player('Player 1');
    }

    //initial game play set to no
    // loop through prompt until player inputs 'y' or 'yes'
    let readyToPlay = "N"
    do {
        readyToPlay = prompt("Are you ready to play blackjack?", "Yes").toUpperCase();
    } while (readyToPlay === "N" || readyToPlay === "NO");

    // check if player typed y or yes
    if (readyToPlay !== "Y" && readyToPlay !== "YES") return;

    // console styles
    let dealerColor = "color: #1640C9; font-size: 18px";
    let playerColor = "color: #D5C71B; font-size: 18px"

    // init dealer and deal cards to player
    const dealer = new Dealer();
    dealer.deal(player);
    let hiddenCard = 'FACE DOWN';

    let dealerCard1 = `Card 1: ${hiddenCard}`;
    let dealerCard2 = `Card 2: ${dealer.hand[1].values.value} of ${dealer.hand[1].suits}`;
    let dealerHandValue = dealer.hand[1].values.weight;
    let dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}] and \n [${dealerCard2}]; \n Hand value: ${dealerHandValue}`;

    let playerCard1 = `Card 1: ${player.hand[0].values.value} of ${player.hand[0].suits}`;
    let playerCard2 = `Card 2: ${player.hand[1].values.value} of ${player.hand[1].suits}`;
    let playerHandValue = player.handTotal(player);
    let playerHand = `%c ${player.name} has: \n [${playerCard1}] and \n [${playerCard2}]; \n Hand value: ${playerHandValue}`;

    await new Promise((resolve) => setTimeout(() => resolve(console.log(dealerHand, dealerColor)), 1000));
    await new Promise((resolve) => setTimeout(() => resolve(console.log(playerHand, playerColor)), 1500));

    // get player answer to hit or stay
    const hitOrStay = prompt("Would you like to hit or stay?", "Stay").toUpperCase();

    if (hitOrStay === 'HIT') {
        // deal a card to player
        playerHit(player, dealer);
        playerHandValue = player.handTotal(player.cards);
        let playerCard3 = `Card 3: ${player.hand[2].values.value} of ${player.hand[2].suits}`;
        playerHand = `%c ${player.name} has: \n [${playerCard1}], \n [${playerCard2}] and \n [${playerCard3}] \n Hand value: ${playerHandValue}`;
        let playerChoice = `${player.name}: ${hitOrStay}`;

        dealerCard1 = `Card 1: ${dealer.hand[0].values.value} of ${dealer.hand[0].suits}`;
        dealerHandValue = dealer.handTotal(dealer);
        dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}] and \n [${dealerCard2}] \n Hand value: ${dealerHandValue}`;

        console.log(playerChoice);
        console.log("-----------------");
        console.log("Dealer reveals hole card");
        console.log("-----------------");
        console.log(dealerHand, dealerColor);
        console.log(playerHand, playerColor);
        console.log("-----------------");

        if (dealerHandValue < 17) {

            dealerHit(dealer);
            dealerCard1 = `Card 1: ${dealer.hand[0].values.value} of ${dealer.hand[0].suits}`;

            let dealerCard3 = `Card 3: ${dealer.hand[2].values.value} of ${dealer.hand[2].suits}`
            dealerHandValue = dealer.handTotal(dealer);
            dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}], \n [${dealerCard2}] \n [${dealerCard3}] \n Hand value: ${dealerHandValue}`;

        } else {
            dealerCard1 = `Card 1: ${dealer.hand[0].values.value} of ${dealer.hand[0].suits}`;
            dealerHandValue = dealer.handTotal(dealer);
            dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}] and \n [${dealerCard2}] \n Hand value: ${dealerHandValue}`;

        }

        console.log(dealerHand, dealerColor);
        console.log(playerHand, playerColor);
        console.log("-----------------");

        checkWinner(player, dealer);

    } else {
        playerHandValue = player.handTotal(player.cards);
        playerHand = `%c ${player.name} has \n [${playerCard1}] and \n [${playerCard2}] \n Hand value: ${playerHandValue}`;
        let playerChoice = `${player.name}: ${hitOrStay}`;

        dealerCard1 = `Card 1: ${dealer.hand[0].values.value} of ${dealer.hand[0].suits}`;
        dealerHandValue = dealer.handTotal(dealer);
        dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}] and \n [${dealerCard2}] \n Hand value: ${dealerHandValue}`;

        console.log(playerChoice);
        console.log("-----------------");
        console.log("Dealer reveals hole card");
        console.log("-----------------");
        console.log(dealerHand, dealerColor);
        console.log(playerHand, playerColor);
        console.log("-----------------");


        if (dealerHandValue < 17) {
            dealerHit(dealer);
            dealerCard1 = `Card 1: ${dealer.hand[0].values.value} of ${dealer.hand[0].suits}`;
            let dealerCard3 = `Card 3: ${dealer.hand[2].values.value} of ${dealer.hand[2].suits}`
            dealerHandValue = dealer.handTotal(dealer);
            dealerHand = `%c ${dealer.name} has \n [${dealerCard1}], \n [${dealerCard2}] \n [${dealerCard3}] \n Hand value: ${dealerHandValue}`;
        } else {
            dealerCard1 = `Card 1: ${dealer.hand[0].values.value} of ${dealer.hand[0].suits}`;
            dealerHandValue = dealer.handTotal(dealer);
            dealerHand = `%c ${dealer.name} has \n [${dealerCard1}] and \n [${dealerCard2}] \n Hand value: ${dealerHandValue}`;
        }

        console.log(dealerHand, dealerColor);
        console.log(playerHand, playerColor);
        console.log("-----------------");

        checkWinner(player, dealer);
    }
})();
