import { rooms, commands, inventory } from './rooms.js';
var currentRoom = 'start';
var killerCurrentRoom;
let danger = 0;

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
        var userInputText = document.createElement('div');
        userInputText.style.background = 'linear-gradient(135deg, #4D2618, #1D1C1A 50%)';
        userInputText.style.width = '50%'
        userInputText.innerHTML = `<div>You have gone ${direct}.</div>`
        var displayGame = document.querySelector('#game-text')
        var gameText = document.createElement('div');
        gameText.innerHTML = `<div>${rooms[currentRoom].description}</div>`;
        displayGame.appendChild(userInputText);
        displayGame.appendChild(gameText);
        clearfield();
    }
}

function updateDanger(currentRoom, killerCurrentRoom) {
    if(currentRoom === killerCurrentRoom) {
        danger += 25;
        const displayDanger = document.getElementById('danger-display');
        displayDanger.innerHTML = `<header>Danger = ${danger}%</header>`;
        if(danger >= 75) {
            displayDanger.style.background = 'red';
        }
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
        var userInputText = document.createElement('div');
        userInputText.style.background = 'linear-gradient(135deg, #5F9EA0, #1D1C1A 50%)';
        userInputText.style.width = '50%'
        userInputText.style.color = 'black';
        userInputText.style.fontWeight = 'bolder'
        userInputText.innerHTML = `<div>${act}...</div>`
        var displayGame = document.querySelector('#game-text')
        var gameText = document.createElement('div');
        gameText.innerHTML = `<div>${rooms[currentRoom].actions[act]}</div>`;
        displayGame.appendChild(userInputText);
        displayGame.appendChild(gameText);
        clearfield();
    } else {
        var displayGame = document.querySelector('#game-text')
        var gameText = document.createElement('div');
        gameText.style.background = '#bdaf95';
        gameText.style.width = '60%';
        gameText.style.color = 'black';
        gameText.style.fontWeight = 'bolder'
        gameText.innerHTML = `<div>${rooms.invalid.description}</div>`;
        displayGame.appendChild(gameText);
        clearfield();
    }
}

// this function displays the possible commands to the user
// the forEach is used to loop through the command array to display a list in the html
function showHelp() {
    var displayGame = document.querySelector('#game-text')
    var commandList = document.createElement('ul');
    commandList.style.background = 'linear-gradient(135deg, #4D2618, #1D1C1A 50%)';
    commandList.style.width = '50%';
    commandList.style.color = 'rgb(95, 158, 160)';
    commandList.innerHTML = 'Available commands:'
    commands.forEach(function (item) {
        let li = document.createElement('li');
        commandList.appendChild(li)
        li.innerHTML += item;
    })
    displayGame.appendChild(commandList);
    clearfield();
}

// similar to the showHelp function, yet this displays the inventory available to the user
function showInventory() {
    var displayGame = document.querySelector('#game-text')
    var inventoryList = document.createElement('ul');
    inventoryList.innerHTML = 'Available inventory:'
    inventoryList.style.background = 'linear-gradient(135deg, #4D2618, #1D1C1A 50%)';
    inventoryList.style.width = '50%';
    inventoryList.style.color = 'rgb(95, 158, 160)';
    inventory.forEach(function (item) {
        let li = document.createElement('li');
        inventoryList.appendChild(li)
        li.innerHTML += item;
    })
    displayGame.appendChild(inventoryList);
    clearfield();
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
// has the 4 and 5 keypresses as well to call the start description and help description
document.addEventListener('keydown', KeyboardEvent => {
    var userInput = document.querySelector('#user-input').value
    var displayGame = document.querySelector('#game-text')
    var userInputText = document.createElement('div');
    var gameText = document.createElement('div');
    // // var dropDown = document.getElementById('action-drop-down');
    userInputText.innerHTML = `<span>${userInput}</span>`;
    if(KeyboardEvent.keyCode === 52) {
        killerStartingRoom();
        gameText.innerHTML = `<div>${rooms.start.description}</div>`;
        displayGame.appendChild(gameText);
    } else if(KeyboardEvent.keyCode === 53) {
        gameText.innerHTML = `<div>${rooms.help.description}</div>`;
        displayGame.appendChild(gameText); 
    } else if(KeyboardEvent.keyCode === 13) {
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
            var direct = input.split(' ')[1];
            changeUserRoom(direct);
            // changeKillerRoom();
            updateDanger(currentRoom, killerCurrentRoom);
            break;
        case 'help':
            showHelp();
            break;
        case 'inventory':
            showInventory();
            break;
        case 'inspect': case 'look': case 'read': case 'use': case 'lie-on': case 'sleep-on': case 'talk': case 'look':
            var act = input;
            userAction(act);
            break;
        case 'pickup':
            var act = input;
            userAction(act);
            addToInventory(input.split(' ')[1]);
            break;
        default:
            var displayGame = document.querySelector('#game-text')
            var gameText = document.createElement('div');
            gameText.style.background = '#D4C6AA';
            gameText.style.width = '50%';
            gameText.style.color = 'black';
            gameText.style.fontWeight = 'bolder'
            gameText.innerHTML = `<div>You entered an invalid command.</div>`;
            displayGame.appendChild(gameText);
            clearfield();
    }
}

