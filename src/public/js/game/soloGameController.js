(function () {

    var SoloGameControllerConstructor = function () {
    };

    SoloGameControllerConstructor.prototype.setDeck = function (deckName) {
        /* make a request to the server to get the saved decklist */
        this._deck = Deck.create({
            "Swamp": 24,
            "Relentless Rats": 36
        });
    };

    SoloGameControllerConstructor.prototype.getDeck = function () {
        return this._deck;
    };

    window.SoloGameController = { };

    window.SoloGameController.createController = function () {
        return new SoloGameControllerConstructor();
    };

})();
