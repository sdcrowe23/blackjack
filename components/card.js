// Create Card class

export class Card {
    constructor(suits, values) {
        this.suit = suits;
        this.value = values;

    }

    static suits = {
        suit1: 'Hearts',
        suit2: 'Spades',
        suit3: 'Diamonds',
        suit4: 'Clubs'
    }

    static values = {
        value1: 2,
        value2: 3,
        value3: 4,
        value4: 5,
        value5: 6,
        value6: 7,
        value7: 8,
        value8: 9,
        value9: 10,
        value10: "J",
        value11: "Q",
        value12: "K",
        value13: "A"
    }
}