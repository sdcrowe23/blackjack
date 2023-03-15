// Create Dealer class
export default class Dealer {
    constructor() {
        this.name = "Dealer";
        this.deck = new Deck();
        this.hand = [];
    }

    // Loops through deck 2 times
    // Pushes card to player hand then dealer hand
    deal(playerTurn) {
        for (let i = 0; i < 2; i++) {
            this.hand.push(this.deck.cards.pop());
            playerTurn.hand.push(this.deck.cards.pop());
        }
    }

    // call handScorer function to get total value of hand
    get handTotal() {
        return handScorer(this.hand);
    }
}