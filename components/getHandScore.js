export const getHandScore = (playerHand) => {
    // init total to zero
    let total = 0;
    let aceCount = 0;

    // loop through hand.length
    for (let i = 0; i < playerHand.length; i++) {
        // get total of player hand
        total += playerHand[i].values.weight;
        if (playerHand[i].values.value === "A") {
            aceCount++;
        }

        if (playerHand[i].suit === "Heart" && playerHand[i].values.weight % 2 != 0) {
            playerHand[i].values.weight = 8;
        }
    }

    // check if aceCount is > 0
    // check total is less than 11, add 10 (because ace accounts for 1 )
    if (aceCount > 0) {
        if (total <= 11) {
            total += 10;
        }
    }

    return total;
}