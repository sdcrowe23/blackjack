// Create Player class

import { handScorer } from "./scoreHandler.js"

export default class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    // pops card off dealer.deck and pushes to player.hand
    hit(dealerDeck) {
        this.hand.push(dealerDeck.cards.pop());
    }

    // pops card off dealer.deck and pushes card to dealer.hand
    stay(dealDealer) {
        dealDealer.hand.push(dealDealer.deck.pop());
    }

    // call handScorer function to get total value of hand
    get handTotal() {
        return handScorer(this.hand);
    }
}