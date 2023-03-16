export const handScorer = (playerHand) => {
    // init total to zero
    let total = 0;
    // loop through hand.length
    for (let i = 0; i < playerHand.length; i++) {
        // check for face value cards and set total to 10
        if (playerHand[i].values.value === "K" || playerHand[i].values.value === "Q" || playerHand[i].values.value === "J") {
            total += playerHand[i].values.weight;
            // check for ace and if total is less than or eqal to 10 then add 11 to total
        } else if (playerHand[i].values.value == "A" && total <= 10) {
            total += playerHand[i].values.weight + 10;
            // check for ace and if total is greater than or eqal to 11 then add 1 to total
        } else if (playerHand[i].values.value == "A" && total >= 11) {
            total += playerHand[i].values.weight;
        } else {
            total += playerHand[i].values.weight;
        }
    }
    return total;
}