// import ES6 Modules
// Game play happens here

import Card from "./components/card.js"
import Deck from "./components/deck.js"
import Player from "./components/player.js"
import Dealer from "./components/dealer.js"
import { handScorer } from "./components/scoreHandler.js"


// push card from deck array to player hand
const playerHit = (player, dealer) => {
    // get card from deck
    return player.hand.push(dealer.deck.cards.pop());
}

// push card from deck array to dealer hand
const dealerHit = (dealer) => {
    // get a card from deck
    return dealer.hand.push(dealer.deck.cards.pop());
}

// compare dealer hand value to player hand value
const checkWinner = (player, dealer) => {
    const winnerColor = "color: green; font-size: 18px";
    const winnerMessage = '%c Hooooray! You won!'
    const loserColor = "color: red; font-size: 18px";
    const loserMessage = '%c The dealer won.';
    const dealerBust = "%c The dealer bust";
    const playerBust = "%c you bust";
    const tie = "%c You tied!"
    let playerHandTotal = player.handTotal(player);
    let dealerHandTotal = dealer.handTotal(dealer);

    if (playerHandTotal === 21 && dealerHandTotal !== 21 || playerHandTotal < 21 && dealerHandTotal > 21 || playerHandTotal < 21 && playerHandTotal > dealerHandTotal) {
        console.log(winnerMessage, winnerColor);
    } else if (playerHandTotal !== 21 && dealerHandTotal === 21 || playerHandTotal > 21 && dealerHandTotal < 21 || dealerHandTotal < 21 && dealerHandTotal > playerHandTotal) {
        console.log(loserMessage, loserColor)
    } else if (playerHandTotal > 21 || dealerHandTotal > 21) {
        console.log('Busted!')
    } else {
        console.log(tie, loserColor)
    }
    return;
}

// IIFE
(async () => {
    // console styles
    let dealerColor = "color: #1640C9; font-size: 18px";
    let playerColor = "color: #D5C71B; font-size: 18px"
    const div = "-----------------"

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

    // init dealer and deal cards to player
    const dealer = new Dealer();
    dealer.deal(player);
    let hiddenCard = 'FACE DOWN';

    let dealerCard1 = `Card 1: ${hiddenCard}`;
    let dealerCard2 = `Card 2: ${dealer.hand[1].values.value} of ${dealer.hand[1].suits}`;
    let dealerHandValue = dealer.hand[1].values.weight;
    let dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}] and \n [${dealerCard2}];`;

    let playerCard1 = `Card 1: ${player.hand[0].values.value} of ${player.hand[0].suits}`;
    let playerCard2 = `Card 2: ${player.hand[1].values.value} of ${player.hand[1].suits}`;
    let playerHandValue = player.handTotal(player);
    let playerHand = `%c ${player.name} has: \n [${playerCard1}] and \n [${playerCard2}]; \n Hand value: ${playerHandValue}`;

    // Display dealer and player hands
    await new Promise((resolve) => setTimeout(() => resolve(console.log(dealerHand, dealerColor)), 1000));
    await new Promise((resolve) => setTimeout(() => resolve(console.log(playerHand, playerColor)), 1500));

    // Reveal dealer card 1
    dealerCard1 = `Card 1: ${dealer.hand[0].values.value} of ${dealer.hand[0].suits}`;
    dealerHandValue = dealer.handTotal(dealer);
    dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}] and \n [${dealerCard2}]; \n Hand value: ${dealerHandValue}`;

    console.log(div);
    console.log("Dealer reveals card");
    console.log(div);
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

    } else {
        playerHandValue = player.handTotal(player.cards);
        playerHand = `%c ${player.name} has \n [${playerCard1}] and \n [${playerCard2}] \n Hand value: ${playerHandValue}`;
        let playerChoice = `${player.name}: ${hitOrStay}`;
    }

    if (dealerHandValue <= 16) {
        dealerHit(dealer);

        let dealerCard3 = `Card 3: ${dealer.hand[2].values.value} of ${dealer.hand[2].suits}`;
        dealerHandValue = dealer.handTotal(dealer);
        dealerHand = `%c ${dealer.name} has: \n [${dealerCard1}], \n [${dealerCard2}]; and \n [${dealerCard3}] \n Hand value: ${dealerHandValue}`;
    }

    let playerChoice = `${player.name}: ${hitOrStay}`.toLowerCase();

    console.log(div);
    console.log("dealer hit")
    console.log(div);
    console.log(dealerHand, dealerColor);
    console.log(div);
    console.log(playerChoice);
    console.log(div);
    console.log(playerHand, playerColor);

    console.log(div);
    checkWinner(player, dealer);
})();
