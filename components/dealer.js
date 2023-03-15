// Create Dealer class

const handScorer = (playerHand) => {
    let total = 0;
    for (let i = 0; i < playerHand.length; i++) {
        if (playerHand[i].value === "K" || playerHand[i].value === "Q" || playerHand[i].value === "J") {
            total += 10;
        } else if (playerHand[i].value == "A" && total <= 10) {
            total += 11;
        } else if (playerHand[i].value == "A" && total >= 11) {
            total += 1;
        } else {
            total += playerHand[i].value;
        }
    }
    return total;
}

class Dealer {
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