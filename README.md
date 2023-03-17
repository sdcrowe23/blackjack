# Blackjack

## Overview

The goal of blackjack (or 21) is for the player to draw cards with a value of 21 (or close to 21) without going over (bust/break). He/she is only playing against the dealer (the house) and has to beat the dealer's hand in order to win.

### The rules are simple:

1. Have a card total value greater than that of the dealer and not "bust".
2. Win by "default" if the dealer "busts".

A player can:

1. "Hit"; the player wants to receive an additional card, or
2. "Stay"; the player feels they are close to 21 and no longer wants additional cards (the player stays with his/her two initial cards)

### Card values

- Numbered cards; cards numbered 2 through 10 are worth their face value.
- Face cards; face cards (King - K, Queen - Q, Jack - J) are worth 10 points each.
- Ace; the ace is either worth 1 or 11

## Game Instructions

As of now, this game is played in the browser console. 

1. User can access the blackjack game [here](https://sdcrowe23.github.io/blackjack/)
2. To view the output of the game state, user needs to press F12 on keyboard - for Mac users, press ```fn + F12```
3. User will be prompted for their name
4. User will be prompted to play game (Y/N)
5. Dealer will deal two cards, one to player then to dealer, twice (dealer will have 1 card hidden)
6. User will have the option to "hit" or "stay" (hit/stay)
7. If the user chooses "hit" then a card will be added to their hand
8. If a user chooses "stay" then the dealer will have a card added to it's hand
9. The total value of both the user and dealer hands are compared and a winner is declared
10. To play again, user will have to refresh the browser

## Tech Stack

- JavaScript, Minimal HTML and CSS

## Build Process

1. Create classes of Card, Deck, Dealer and Player
2. Seperate classes and import into main file
3. Create functions for hit, deal, and checking for winner
4. Create logic for game play
5. Tweak console.log outputs 
6. Add checks for alert scenarios (such as default values and hitting cancel)

## Next Steps

1. Create UI
2. Add betting capabilities
3. Add more than one deck
4. Add capabilities for dealer getting soft/hard 17
5. Track wins/loses/ties
6. Add doubles/splits