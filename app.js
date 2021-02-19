import { rooms, commands, inventory } from './rooms.js';
var currentRoom = 'start';

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

function addToInventory(item) {
    inventory.push(item);
    clearfield();
}

function clearfield() {
    document.querySelector('#user-input').value = '';
}





