(function () {
    var CARD_SIZE = 125;
    var CARD_ORIENTATION_TAPPED = "tapped";
    var CARD_ORIENTATION_UNTAPPED = "untapped";
    var CARD_STATE_MOVING = "moving";
    var CARD_STATE_NOT_MOVING = "notmoving";

    var Card = window.Card = function (cardName, parentContainer) {
        this.parentContainer = parentContainer || document.body;
        this.cardDiv = document.createElement('div');
        this.cardImage = document.createElement('img');

        this.currentTapState = CARD_ORIENTATION_UNTAPPED;
        this.currentMovementState = CARD_STATE_NOT_MOVING;
        this.currentPosition = {x:100, y:100};

        this.cardImage.src = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=" + cardName;
        this.cardImage.height = CARD_SIZE;
        this.cardDiv.style.position = "absolute";
        this.updateCardPosition(this.currentPosition);
        this.renderCardPosition();

        this.cardDiv.appendChild(this.cardImage);
        this.parentContainer.appendChild(this.cardDiv);

        var card = this;
        this.cardDiv.onmousedown = function (event) {
            card.handleOnMouseDownEvent(event);
            return false;
        };

        this.cardDiv.onmouseup = function (event) {
            card.handleOnMouseUpEvent(event);
            return false;
        };

        this.cardDiv.ondblclick = function (event) {
            card.handleDoubleClickEvent(event);
            return false;
        };
    };

    Card.prototype.handleOnMouseDownEvent = function (mouseEvent) {
        var card = this;
        this.currentMovementState = CARD_STATE_MOVING;
        this.captureMouseOffsetFromEvent(mouseEvent);
        this.parentContainer.onmousemove = function (event) {
            card.handleMouseMoveEvent(event);
        };
    };

    Card.prototype.handleOnMouseUpEvent = function (mouseEvent) {
        this.currentMovementState = CARD_STATE_NOT_MOVING;
        this.parentContainer.onmousemove = null;
    };

    Card.prototype.handleMouseMoveEvent = function (mouseEvent) {
        if (this.currentMovementState === CARD_STATE_MOVING) {
            this.updateCardPosition(getPositionFromMouseEvent(mouseEvent));
            this.renderCardPosition();
        }
    };

    Card.prototype.handleDoubleClickEvent = function (mouseEvent) {
        this.currentTapState = CARD_ORIENTATION_TAPPED === this.currentTapState ?
            CARD_ORIENTATION_UNTAPPED :
            CARD_ORIENTATION_TAPPED;
        this.reOrientCard();
    };

    Card.prototype.reOrientCard = function () {
        var rotateValue = this.currentTapState === CARD_ORIENTATION_TAPPED ? 90 : 0;
        var rotateString = "rotate(" + rotateValue + "deg)";
        this.cardDiv.style.webkitTransform = rotateString;
        this.cardDiv.style.mozTransform = rotateString;
    };

    Card.prototype.updateCardPosition = function (newPosition) {
        if (this.currentPosition.xOffset) {
            newPosition.x -= this.currentPosition.xOffset;
        }
        if (this.currentPosition.yOffset) {
            newPosition.y -= this.currentPosition.yOffset;
        }
        this.currentPosition.x = newPosition.x;
        this.currentPosition.y = newPosition.y;
    };

    Card.prototype.renderCardPosition = function () {
        this.cardDiv.style.left = this.currentPosition.x + "px";
        this.cardDiv.style.top = this.currentPosition.y + "px";
    };

    Card.prototype.captureMouseOffsetFromEvent = function (mouseEvent) {
        this.currentPosition.xOffset = mouseEvent.offsetX;
        this.currentPosition.yOffset = mouseEvent.offsetY;
    };

    var getPositionFromMouseEvent = function (mouseEvent) {
        return {
            x:mouseEvent.clientX,
            y:mouseEvent.clientY,
        };
    };
})();
