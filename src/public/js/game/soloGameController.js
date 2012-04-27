(function () {

    var SoloGameControllerConstructor = function () {
    };

    SoloGameControllerConstructor.prototype.getDeck = function (deckName) {
        /* make a request to the server to get the saved decklist */
        return Deck.create({
            "Swamp": 24,
            "Relentless Rats": 36
        });
    };

    SoloGameControllerConstructor.prototype.setDeck = function (deck) {
        this._deck = deck;
    };

    window.SoloGameController = { };

    window.SoloGameController.createController = function () {
        return new SoloGameControllerConstructor();
    };

})();
