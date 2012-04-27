(function () {

    var SoloGameViewConstructor = function () {
    };

    SoloGameViewConstructor.prototype.render = function () {
        this._deck = this.soloGameController.getDeck(urlParts.create()['deck']);
        this._board = this._createBoard();
        this._setupBoardPositions(this._board);
        this._cards = this._createCardImageResources(this._deck);
        this._cardBack = this._createCardBack();
        this._showDeckBack(this._board, this._cardBack);

        this.soloGameController = SoloGameController.createController();
        this.soloGameController.setDeck(this._deck);
    };

    SoloGameViewConstructor.prototype._createBoard = function () {
        var body = document.body;
        body.innerHTML = "";

        var board = document.createElement('div');
        board.style.border = "2px solid black";
        board.style.position = "absolute";
        board.style.left = "20px";
        board.style.top = "20px";
        board.style.width = "1400px";
        board.style.height = "840px";

        body.appendChild(board);

        return board;
    };

    SoloGameViewConstructor.prototype._createCombatBox = function (board) {
        var box = document.createElement('div');
        box.innerHTML = "COMBAT";
        box.style.border = "5px solid grey";
        box.style.font = "48px Helvetica";
        box.style.color = "grey";
        box.style.position = "absolute";
        box.style.width = "980px";
        box.style.height = "250px";
        box.style.top = "10px";
        box.style.left = "10px";
        board.appendChild(box);
        board.combatBox = box;
    };

    SoloGameViewConstructor.prototype._createPermanentsBox = function (board) {
        var box = document.createElement('div');
        box.innerHTML = "PERMANENTS";
        box.style.border = "5px solid grey";
        box.style.font = "48px Helvetica";
        box.style.color = "grey";
        box.style.position = "absolute";
        box.style.width = "800px";
        box.style.height = "530px";
        box.style.top = "290px";
        box.style.left = "190px";
        board.appendChild(box);
        board.permanentsBox = box;
    };

    SoloGameViewConstructor.prototype._createDiscardBox = function (board) {
        var box = document.createElement('div');
        box.innerHTML = "DISCARD";
        box.style.border = "5px solid grey";
        box.style.font = "32px Helvetica";
        box.style.color = "grey";
        box.style.position = "absolute";
        box.style.width = "150px";
        box.style.height = "205px";
        box.style.top = "615px";
        box.style.left = "10px";
        board.appendChild(box);
        board.discardBox = box;
    };

    SoloGameViewConstructor.prototype._createDeckBox = function (board) {
        var box = document.createElement('div');
        box.style.border = "5px solid grey";
        box.style.font = "48px Helvetica";
        box.style.color = "grey";
        box.style.position = "absolute";
        box.style.width = "150px";
        box.style.height = "205px";
        box.style.top = "375px";
        box.style.left = "10px";
        board.appendChild(box);
        board.deckBox = box;
    };

    SoloGameViewConstructor.prototype._createSpellStackBox = function (board) {
        var box = document.createElement('div');
        box.innerHTML = "SPELL STACK";
        box.style.border = "5px solid grey";
        box.style.font = "48px Helvetica";
        box.style.color = "grey";
        box.style.position = "absolute";
        box.style.width = "360px";
        box.style.height = "250px";
        box.style.top = "10px";
        box.style.left = "1020px";
        board.appendChild(box);
        board.spellStackBox = box;
    };

    SoloGameViewConstructor.prototype._createHandBox = function (board) {
        var box = document.createElement('div');
        box.innerHTML = "HAND";
        box.style.border = "5px solid grey";
        box.style.font = "48px Helvetica";
        box.style.color = "grey";
        box.style.position = "absolute";
        box.style.width = "360px";
        box.style.height = "530px";
        box.style.top = "290px";
        box.style.left = "1020px";
        board.appendChild(box);
        board.handBox = box;
    };

    SoloGameViewConstructor.prototype._setupBoardPositions = function (board) {
        this._createCombatBox(board);
        this._createPermanentsBox(board);
        this._createDiscardBox(board);
        this._createDeckBox(board);
        this._createSpellStackBox(board);
        this._createHandBox(board);
    };

    SoloGameViewConstructor.prototype._createCardImageResources = function (deck) {
        var cardImages = {};
        _.each(deck.getCardList(), function (cardName) {
            var image = document.createElement('img');
            image.src = "/images/cards/" + cardName + ".jpeg";
            cardImages[cardName] = image;
        });
        return cardImages;
    };

    SoloGameViewConstructor.prototype._createCardBack = function () {
        var cardBack = document.createElement('img');
        cardBack.src = "/images/cards/back.jpeg";
        return cardBack;
    };

    SoloGameViewConstructor.prototype._showDeckBack = function (board, cardBack) {
        cardBack.height = gameConfig.cardHeight;
        cardBack.style.padding = "2px";
        board.deckBox.appendChild(cardBack);
    };

    var soloGameView = window.SoloGameView = { };

    soloGameView.createView = function () {
        return new SoloGameViewConstructor();
    };
})();
