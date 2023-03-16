// Create Dealer class
import Deck from "./deck.js";
import { handScorer } from "./scoreHandler.js";

export default class Dealer {
    constructor() {
        this.name = "Dealer";
        this.deck = new Deck();
        this.hand = [];
    }

    // Loops through deck 2 times
    // Pushes card to player hand then dealer hand
    deal(player) {
        for (let i = 0; i < 2; i++) {
            this.hand.push(this.deck.cards.pop());
            player.hand.push(this.deck.cards.pop());
        }
    }

    // call handScorer function to get total value of hand
    handTotal() {
        return handScorer(this.hand);
    }
}