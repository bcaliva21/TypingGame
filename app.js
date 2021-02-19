import { rooms, commands, inventory } from './rooms.js';
var currentRoom = 'start';

// change the user room by getting the direction typed in by the player
// when called this function adds a movement blurb to the html
// it also adds the new description of the new room by accessing the rooms object
// clearfield is called at the end of the function to clear the input
function changeUserRoom(direct) {
    if(rooms[currentRoom].directions[direct] !== undefined ) {
        currentRoom = rooms[currentRoom].directions[direct];
        var userInputText = document.createElement('div');
        userInputText.style.background = '#4D2618';
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
        userInputText.style.background = 'rgb(95, 158, 160)';
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
        gameText.style.background = '#D4C6AA';
        gameText.style.width = '50%';
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
    commandList.style.background = '#4D2618';
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
    inventoryList.style.background = '#4D2618';
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

// it will be much easier if each room has a value, then I can use some math functions to 
// move the killer in and out of rooms
// values will matter most in the rooms where the floor changes, this can help the killer not to
// teleport between floors to fuck the user
// I can choose a few rooms which the killer can spawn into when the user presses 4
// changeKillerRoom can be called with the changeUserRoom function so they run at the same time
function changeKillerRoom() {

}

function updateDanger(danger) {

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
            break;
        case 'help':
            showHelp();
            break;
        case 'inventory':
            showInventory();
            break;
        case 'inspect': case 'look': case 'use': case 'lie-on': case 'sleep-on': case 'talk': case 'look':
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

