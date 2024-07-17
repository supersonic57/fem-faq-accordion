"use strict";
const cards = document.querySelectorAll(".card");
const openCard = (card) => {
    const button = card.children[0].children[1];
    card.classList.add("open");
    button.src = "assets/images/icon-minus.svg";
};
const closeCard = (card) => {
    const button = card.children[0].children[1];
    card.classList.remove("open");
    button.src = "assets/images/icon-plus.svg";
};
const closeAllCards = (cards) => {
    cards.forEach((card) => {
        closeCard(card);
    });
};
const keyboardUp = (cards) => {
    if (cards[0].classList.contains("open")) {
        return;
    }
    for (let i = cards.length - 1; i >= 1; i--) {
        if (cards[i].classList.contains("open")) {
            closeCard(cards[i]);
            openCard(cards[i - 1]);
            return;
        }
    }
    openCard(cards[cards.length - 1]);
};
const keyboardDown = (cards) => {
    if (cards[cards.length - 1].classList.contains("open")) {
        return;
    }
    for (let i = 0; i < cards.length - 1; i++) {
        if (cards[i].classList.contains("open")) {
            closeCard(cards[i]);
            openCard(cards[i + 1]);
            return;
        }
    }
    openCard(cards[0]);
};
cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (!card.classList.contains("open")) {
            closeAllCards(cards);
            openCard(card);
        }
        else {
            closeAllCards(cards);
        }
    });
});
window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") {
        keyboardUp(cards);
    }
    if (e.code === "ArrowDown") {
        keyboardDown(cards);
    }
});
