export const handScorer = (playerHand) => {
    // init total to zero
    let total = 0;
    // loop through hand.length
    for (let i = 0; i < playerHand.length; i++) {
        // check for face value cards and set total to 10
        if (playerHand[i].value === "K" || playerHand[i].value === "Q" || playerHand[i].value === "J") {
            total += 10;
            // check for ace and if total is less than or eqal to 10 then add 11 to total
        } else if (playerHand[i].value == "A" && total <= 10) {
            total += 11;
            // check for ace and if total is greater than or eqal to 11 then add 1 to total
        } else if (playerHand[i].value == "A" && total >= 11) {
            total += 1;
        } else {
            total += playerHand[i].value;
        }
    }
    return total;
}