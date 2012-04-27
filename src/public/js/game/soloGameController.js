(function () {

    var SoloGameControllerConstructor = function () {
    };

    SoloGameControllerConstructor.prototype.setDeck = function (deckName) {
        /* make a request to the server to get the saved decklist */
        this._deck = Deck.create({
            "Swamp": 24,
            "Relentless Rats": 36
        });

        var cardList = [];
        _.each(this._deck.getDeck(), function (cardName, cardCount) {
            for (var i = 0; i < cardCount; i += 1) {
                cardList.push(cardName);
            }
        });
        this._cardList = cardList;
    };

    SoloGameControllerConstructor.prototype.getDeck = function () {
        return this._deck;
    };

    SoloGameControllerConstructor.prototype.shuffleDeck = function () {
        this._cardList = _.shuffle(this._cardList);
    };

    SoloGameControllerConstructor.prototype.drawCard = function () {
        return this._cardList.pop();
    };

    window.SoloGameController = { };

    window.SoloGameController.createController = function () {
        return new SoloGameControllerConstructor();
    };

})();
