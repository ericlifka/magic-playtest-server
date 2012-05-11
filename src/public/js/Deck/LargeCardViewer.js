(function () {
    var DISPLAY_SIZE = 400;

    var LargeCardViewer = window.LargeCardViewer = function (parentContainer) {
        this.parentContainer = parentContainer;
        this.displayDiv = document.createElement('div');
        this.cardImage = document.createElement('img');
        this.cardImage.src = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Card Back";
        this.cardImage.height = DISPLAY_SIZE;
        this.displayDiv.appendChild(this.cardImage);
        this.parentContainer.appendChild(this.displayDiv);

        this.displayDiv.style.position = "absolute";
        this.displayDiv.style.left = "10px";
    };

    LargeCardViewer.prototype.showCard = function (imageSource) {
        this.cardImage.src = imageSource;
    };
})();
