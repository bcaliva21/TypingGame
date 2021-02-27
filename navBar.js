import { inventory, displayGame, gameText, currentRoom, killerStartingRoom, killerCurrentRoom } from './app.js';
import { rooms } from './rooms.js';

export { updateDanger };

const helpContainer = document.querySelector('.help-container');
const helpButton = document.querySelector('.show-help');
const inventoryContainer = document.querySelector('.inventory-container');
const inventoryButton = document.querySelector('.show-inventory');
let danger = 0;

document.querySelector('.start-game').addEventListener('click', startGame); 

function startGame() {
    killerStartingRoom();
    gameText.innerHTML = `<div>${rooms.start.description}</div>`;
    displayGame.appendChild(gameText);
}

function updateDanger(currentRoom, killerCurrentRoom) {
    if(currentRoom === killerCurrentRoom) {
        danger += 25;
        const displayDanger = document.querySelector('.display-danger');
        displayDanger.innerHTML = `<span>Danger = ${danger}%</span>`;
        // if(danger >= 75) {
        //     displayDanger.style.color = 'red';
        // }
    }
}

// When the user clicks on the button, open the modal
inventoryButton.onclick = function() {
    const inventoryBody = document.querySelector('.inventory-body');
    inventoryBody.innerHTML = `<div>Available Inventory<br>${inventory}</div>`
    inventoryContainer.style.display = "block";
}
// When the user clicks on the button, open the modal
helpButton.onclick = function() {
    helpContainer.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target === helpContainer) {
        helpContainer.style.display = "none";
    }
    if(event.target === inventoryContainer) {
        inventoryContainer.style.display = "none";
    }
}