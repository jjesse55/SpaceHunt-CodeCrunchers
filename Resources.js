
const resources = {
	_energy;
	_supplies;
	//Story: As a player, I want to be notified when I run out of energy so I know I have lost the game.
	//Acceptance Criteria:
	//1. Verify that if the player's energy has fallen below one, a message is sent to the player.
	//2. Verify that if the player's energy has fallen below one and the configuration is 
	//   set to "regular play" the game ends.

	function initResources() {
		_energy = eval(document.UI.energy.value);
		_supplies = eval(document.UI.supplies.value);
	}

	function checkEnergy() {
		//alert ("Checking Energy");
		if (document.UI.energy.value <= 0){
			alert ("Out of energy!");
			/*if (!godMode){
				//call gameover function
			}*/
		}
	}
	
	function addEnergy(toAdd) {
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addEnergy with negative value - call subtractEnergy to lower energy");
		}
		_energy += evaledAdd;
		document.UI.energy.value = _energy;
	}
	
	function subtractEnergy(toSubtract) {
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractEnergy with negative value - call with positive value to be subtracted");
		}
		_energy -= evaledAdd;
		document.UI.energy.value = _energy;
	}

	//Story: As a player, I want to be notified when I run out of supplies so I know I have lost the game.
	//Acceptance Criteria:
	//1. Verify that if the player's supplies have fallen below one percent, a message is sent to the player.
	//2. Verify that if the player's supplies have fallen below one percent, and 
	//   the configuration is set to "regular play" the game ends.

	function checkSupplies() {
		//alert("Checking Supplies");
		if (document.UI.supplies.value <= 0){
			alert ("Out of supplies!");
			/*if (!godMode){
				//call gameover function
			}*/
		}
	}
	
	function addSupplies(toAdd) {
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addSupplies with negative value - call subtractSupplies to lower supplies");
		}
		_supplies += evaledAdd;
		document.UI.supplies.value = _supplies;
	}
	
	function subtractSuplies(toSubtract) {
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractSupplies with negative value - call with positive value to be subtracted");
		}
		_supplies -= evaledAdd;
		document.UI.supplies.value = _supplies;
	}
};
















