// Create Card class

export default class Card {
    constructor(suits, values) {
        this.suits = suits;
        this.values = values;

    }

    static suits = {
        suit1: 'Hearts',
        suit2: 'Spades',
        suit3: 'Diamonds',
        suit4: 'Clubs'
    }

    static values = [
        {
            value: '2',
            weight: 2
        },
        {
            value: '3',
            weight: 3
        },
        {
            value: '4',
            weight: 4
        },
        {
            value: '5',
            weight: 5
        },
        {
            value: '6',
            weight: 6
        },
        {
            value: '7',
            weight: 7
        },
        {
            value: '8',
            weight: 8
        },
        {
            value: '9',
            weight: 9
        },
        {
            value: '10',
            weight: 10
        },
        {
            value: 'J',
            weight: 10
        },
        {
            value: 'Q',
            weight: 10
        },
        {
            value: 'K',
            weight: 10
        },
        {
            value: 'A',
            weight: 1
        }
    ]
}