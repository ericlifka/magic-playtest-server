(function () {
    var LIBRARY_SIZE = 125;
    var LIBRARY_POSITION_X = 100;
    var LIBRARY_POSITION_Y = 300;

    var Library = window.Library = function (deckDescription, playerHand, parentContainer) {
        this.parentContainer = parentContainer;
        this.deckDescription = deckDescription;
        this.deckList = [];
        this.deckDiv = document.createElement('div');
        this.deckImage = document.createElement('img');
        this.playerHand = playerHand;

        this.deckImage.src = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Card Back";
        this.deckImage.height = LIBRARY_SIZE;
        this.deckDiv.style.position = "absolute";
        this.deckDiv.style.left = LIBRARY_POSITION_X + "px";
        this.deckDiv.style.top = LIBRARY_POSITION_Y + "px";

        this.deckDiv.appendChild(this.deckImage);
        this.parentContainer.appendChild(this.deckDiv);

        var library = this;
        this.deckDiv.onclick = function (event) {
            library.handleClickEvent(event);
        };

        this.buildDeckFromDeckList();
    };

    Library.prototype.handleClickEvent = function (clickEvent) {
        var card = new Card(this.removeTopCard(), this.playerHand, this.parentContainer);
        this.playerHand.addCardToHand(card);
    };

    Library.prototype.removeTopCard = function () {
        var card;
        if (this.deckList.length > 0) {
            card = this.deckList.pop();
        }
        if (this.deckList.length === 0) {
            this.deckDiv.innerHTML = "Empty";
            this.deckDiv.onclick = null;
        }
        return card;
    };

    Library.prototype.buildDeckFromDeckList = function () {
        var cardName;
        for (cardName in this.deckDescription) {
            if (this.deckDescription.hasOwnProperty(cardName)) {
                for (var i = 0; i < this.deckDescription[cardName]; i += 1) {
                    this.deckList.push(cardName);
                }
            }
        }
        this.shuffleLibrary();
    };

    Library.prototype.shuffleLibrary = function () {
        this.deckList = _.shuffle(this.deckList);
    };

})();
