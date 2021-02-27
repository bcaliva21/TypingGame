import { updateDanger } from './navBar.js';
import { rooms, commands, inventory } from './rooms.js';
export { inventory, displayGame, gameText, currentRoom, killerCurrentRoom, killerStartingRoom };
var currentRoom = 'start';
var killerCurrentRoom;

const displayGame = document.querySelector('#game-text')
const gameText = document.createElement('div');

// Randomly sets the killer starting room
// I choose rooms that initially have all four directions available to move
function killerStartingRoom() {
    var determineStart = Math.floor(Math.random() * 4);
    switch (determineStart) {
        case 0:
            return killerCurrentRoom = 'living11';
        case 1:
            return killerCurrentRoom = 'pool1';
        case 2:
            return killerCurrentRoom = 'suite3b';
        case 3:
            return killerCurrentRoom = 'living12';
    }
}

// change the user room by getting the direction typed in by the player
// when called this function adds a movement blurb to the html
// it also adds the new description of the new room by accessing the rooms object
// clearfield is called at the end of the function to clear the input
function changeUserRoom(direct) {
    if(rooms[currentRoom].directions[direct] !== undefined ) {
        currentRoom = rooms[currentRoom].directions[direct];
        const userInputText = document.createElement('p');
        const gameText = document.createElement('div');
        userInputText.innerHTML = `<div>You have gone ${direct}.</div>`
        gameText.innerHTML = `<div>${rooms[currentRoom].description}</div>`;
        displayGame.appendChild(userInputText);
        displayGame.appendChild(gameText);
        clearfield();
    }
}


// very similar to the changeUserRoom function
// instead this function matches the user commands to the actions in the 
// rooms[currentRoom].actions object
// displays a text for the user to see his command went through and worked
// clearfield is called at the end of the function to clear the input

// else statement catches incorrect user commands and returns an error to the html
// clearfield is called at the end of the function to clear the input
function userAction(act) {
    if(rooms[currentRoom].actions[act] !== undefined ) {
        const userInputText = document.createElement('p2');
        const gameText = document.createElement('div');
        userInputText.innerHTML = `<div>${act}...</div>`
        gameText.innerHTML = `<div>${rooms[currentRoom].actions[act]}</div>`;
        displayGame.appendChild(userInputText);
        displayGame.appendChild(gameText);
        clearfield();
    } else {
        const gameText = document.createElement('p3');
        gameText.innerHTML = `<div>${rooms.invalid.description}</div>`;
        displayGame.appendChild(gameText);
        clearfield();
    }
}

// simple function that adds items picked up by the user to the inventory array
function addToInventory(item) {
    inventory.push(item);
    clearfield();
}

// the most called function by a mile... this function clears the user input after a 
// command is entered
function clearfield() {
    document.querySelector('#user-input').value = '';
}

// Decided to nix the idea of adding a value to each room
// Instead I went with generating a random number between 0-3, each value represents a direction
// This chooses a room for the killer to move to with each move of the user
// I have a check statement with each case so if their is no room in the random direction
// The killer will stay in it's current room
function changeKillerRoom() {
    var determineMove = Math.floor(Math.random() * 4);
    switch (determineMove) {
        case 0:
            if(rooms[killerCurrentRoom].directions.north === undefined) {
                return killerCurrentRoom;
            } else killerCurrentRoom = rooms[killerCurrentRoom].directions.north;
            break;
        case 1:
            if(rooms[killerCurrentRoom].directions.east === undefined) {
                return killerCurrentRoom;
            } else killerCurrentRoom = rooms[killerCurrentRoom].directions.east;
            break;
        case 2:
            if(rooms[killerCurrentRoom].directions.south === undefined) {
                return killerCurrentRoom;
            } else killerCurrentRoom = rooms[killerCurrentRoom].directions.south;
            break;
        case 3:
            if(rooms[killerCurrentRoom].directions.west === undefined) {
                return killerCurrentRoom;
            } else killerCurrentRoom = rooms[killerCurrentRoom].directions.west;
            break;
    }
}

// input function... all major inputs go through this event listener
document.addEventListener('keydown', KeyboardEvent => {
    const userInput = document.querySelector('#user-input').value
    const userInputText = document.createElement('div');
    userInputText.innerHTML = `<span>${userInput}</span>`;
    if(KeyboardEvent.keyCode === 13) {
        playerInput(userInput);
    }   
});

// this is the main game function, it distributes the user inputs to the appropriate functions
// I split the input to get the first word typed by the user
// this allows me to create a large switch statement to help handle the commands
// all functions are called within this function
function playerInput(input) {
    var command = input.split(' ')[0];
    switch(command) {
        case 'go':
            let direct = input.split(' ')[1];
            changeUserRoom(direct);
            changeKillerRoom();
            updateDanger(currentRoom, killerCurrentRoom);
            break;
        case 'inspect': case 'look': case 'read': case 'use': case 'lie-on': case 'sleep-on': case 'talk': case 'look':
            const act = input;
            userAction(act);
            break;
        case 'pickup':
            const pickupAct = input;
            userAction(pickupAct);
            addToInventory(input.split(' ')[1]);
            break;
        default:
            const gameText = document.createElement('p3');
            gameText.innerHTML = `<div>${rooms.invalid.description}</div>`;
            displayGame.appendChild(gameText);
            clearfield();
    }
}
