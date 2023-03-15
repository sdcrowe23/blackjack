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
        Object.values(Card.suits).forEach((suit) => {
            Object.values(Card.values).forEach((value) => {
                return this.cards.push(new Card(suit, value));
            })
        })
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