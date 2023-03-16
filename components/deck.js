// Create Deck class
import Card from "./card.js";

export default class Deck {
    constructor() {
        this.cards = [];
        this.initialize();
        this.shuffle();
    }

    // immedialy called upon object init
    initialize() {

        // loop through values/suits of Card object and return Card to this.cards array
        for (const suit_indx in Card.suits) {
            for (const value_indx in Card.values) {
                this.cards.push(new Card(Card.suits[suit_indx], Card.values[value_indx]));
            }
        }
        return
    }
    // shuffles this.card arry after Deck init
    shuffle() {
        for (const card_indx in this.cards) {
            // get random number
            let randomIndx = Math.floor(Math.random() * (this.cards.length - 1));
            // get current index of card in this.class
            let temp = this.cards[card_indx];
            // swap current index with random index
            this.cards[card_indx] = this.cards[randomIndx];
            this.cards[randomIndx] = temp;
        }
        return;
    }
}