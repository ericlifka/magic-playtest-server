(function () {
    var Deck = window.Deck = { };

    var DeckConstructor = function () {
        this._cards = {};
    };

    DeckConstructor.prototype.registerCard = function (cardName, cardCount) {
        this._cards[cardName] = cardCount;
    };

    DeckConstructor.prototype.getCardList = function () {
        return _.collect(this._cards, function (name, count) {
            return name;
        });
    };

    DeckConstructor.prototype.getDeck = function () {
        return this._cards;
    }

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