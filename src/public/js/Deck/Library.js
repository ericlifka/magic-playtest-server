(function () {
    var LIBRARY_SIZE = 125;
    var LIBRARY_POSITION_X = 100;
    var LIBRARY_POSITION_Y = 300;

    var Library = window.Library = function (deckList, parentContainer) {
        this.parentContainer = parentContainer;
        this.deckList = deckList;
        this.deckDiv = document.createElement('div');
        this.deckImage = document.createElement('img');

        this.deckImage.src = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Card Back";
        this.deckImage.height = LIBRARY_SIZE;
        this.deckDiv.style.position = "absolute";
        this.deckDiv.style.left = LIBRARY_POSITION_X + "px";
        this.deckDiv.style.top = LIBRARY_POSITION_Y + "px";

        this.deckDiv.appendChild(this.deckImage);
        this.parentContainer.appendChild(this.deckDiv);
    };
})();
