//Global varibale for the max size of the map deminsion.
//const max = 128;

//Global for persistent state
let played = false;
var canMove = true;

//Nested position object within the spacecraft object representing
//its current position at any given time.
const position = {
    _x: 0,
    _y: 0,

    //Setter and getter functions since the field for this class
    //are private.
    get x() { return this._x; },
    get y() { return this._y; },
    set x(num) { this._x = eval(num); },
    set y(num) { this._y = eval(num); },

    initPosition() {
        this._x = config.initialLocationX;
        this._y = config.initialLocationY;
        this.updateFormCPs();
        worldCanvas.repositionPlayer(this._x, this._y);
        played = true;
    },

    moveSpacecraft(angle, distance) {
        if (!canMove) return;
        let evaledDistance = eval(distance);
        let i;
        //Error checking to make sure that the values passes in for
        //angle and distance are indeed numbers.
        if(evaledDistance < 1) {
            alert("Error in attempting to move spacecraft.\nPlease provide a positive value for the distance in which you would like to travel.");
            return false;
        }

        //Now start the movement one step at a time.
        for(i = 1; i <= evaledDistance; ++i)
        {

            if(angle === 0) {
                //User wants to move East.
                if((this._x + 1) >= config.boardWidth) {
                    //User has tried to move off the map.
                    break;
                }
                else {
                    this._x += 1;
                    worldCanvas.movePlayerEast(1);
                    worldCanvas.setRotation('player', 0);
                    if(checkCollision() === true) {
                        break;
                    }
                }
            } else if(angle === 90) {
                //User wants to move North.
                if((this._y - 1) < 0) {
                    //User has tried to move off the map.
                    break;
                }
                else {
                    this._y -= 1;
                    worldCanvas.movePlayerNorth(1);
                    worldCanvas.setRotation('player', 90);
                    if(checkCollision() === true) {
                        break;
                    }
                }
            } else if(angle === 180) {
                //User wants to move West.
                if((this._x - 1) < 0) {
                    //User has tried to move off the map.
                    break;
                }
                else {
                    this._x -= 1;
                    worldCanvas.movePlayerWest(1);
                    worldCanvas.setRotation('player', 180);
                    if(checkCollision() === true) {
                        break;
                    }
                }
            } else if(angle === 270) {
                //User wants to move South.
                if((this._y + 1) >= config.boardWidth) {
                    //User has tried to move off the map.
                    break;
                }
                else {
                    this._y += 1;
                    worldCanvas.movePlayerSouth(1);
                    worldCanvas.setRotation('player', 270);
                    if(checkCollision() === true) {
                        break;
                    }
                }
            } else {
                //User did not specify a valid angle when trying to move.
                alert("Error when attempting to move.\nMust enter a valid angle (0, 90, 180, or 270).");
                return false;
            }

            if(i === evaledDistance) {
                break;
            }
        }

        //Call the functions to subtract energy and supplies as well as
        //make sure those fields are still valid to play the game.
        if(resources.isDamaged() === true) {
            i *= 5;
        }
        resources.subtractEnergy(10*i);
        resources.subtractSuppliesTwo();
        resources.checkEnergy();
        resources.checkSupplies();

        this.updateFormCPs()

        badMax.chaseDown(this._x, this._y);
        return true;    //Movement was executed successfully.
    },

    updateFormCPs() {
        document.UI.xValue.value = this._x;
        document.UI.yValue.value = this._y;
    },

    updateCPs() {
        this._x = eval(document.UI.xValue.value);
        this._y = eval(document.UI.yValue.value);

        if(this._x < 0 || this._y < 0 || this._x > config.boardWidth || this._y > config.boardHeight) {
            this.updateFormCPs();
        }

        worldCanvas.repositionPlayer(this._x, this._y);
        checkCollision();
    }
};

function disableShipMovement(){
    canMove = false;
}

function enableShipMovement(){
    canMove = true;
}
