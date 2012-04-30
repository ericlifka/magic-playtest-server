(function () {
    var HAND_POSITION_X = 50;
    var HAND_POSITION_Y = 600;
    var CARD_OFFSET = 100;

    var Hand = window.Hand = function () {
        this.cardsInHand = [];
    };

    Hand.prototype.addCardToHand = function (card) {
        var cardPosition = this.cardsInHand.length;
        this.cardsInHand[cardPosition] = card;
        card.setHandPosition(cardPosition);
        this.repositionCardsInHand();
    };

    Hand.prototype.repositionCardsInHand = function () {
        this.cardsInHand.forEach(function (card, i) {
            card.updateCardPosition({
                x: HAND_POSITION_X + i * CARD_OFFSET,
                y: HAND_POSITION_Y
            });
            card.renderCardPosition();
        });
    };

    Hand.prototype.removeCardFromHand = function (handPosition) {
        this.cardsInHand = removeElementFromArray(this.cardsInHand, handPosition);
        this.cardsInHand.forEach(function (card, i) {
            card.setHandPosition(i);
        });
        this.repositionCardsInHand();
    };

    var removeElementFromArray = function (array, index) {
        var newArray = []
        for (var i = 0; i < array.length; i += 1) {
            if (i != index) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    };
})();
