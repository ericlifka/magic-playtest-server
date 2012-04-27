(function () {
    var Deck = window.Deck = { };

    var DeckConstructor = function () {
        this._cards = {};
    };

    DeckConstructor.prototype.registerCard = function (cardName, cardCount) {
        this._cards[cardName] = cardCount;
    };

    DeckConstructor.prototype.getCardList = function () {
        _.collect(this._cards, function (count, name) {
            return name;
        });
    };

    Deck.create = function (deckList) {
        var newDeck = new DeckConstructor();
        if (!_.isUndefined(deckList)) {
            _.each(deckList, function (cardName, cardCount) {
                newDeck.registerCard(cardName, cardCount);
            });
        }
        return newDeck;
    };
})();