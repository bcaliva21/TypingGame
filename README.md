# typeScriptGame
This is a typing adventure game. You explore the map with a given set of commands and interact with the environment and people you come across. The goal is to escape or kill the killer before he kills you.

Currently...
    You can use commands to explore different rooms and perform certain actions.
    You can add items into an inventory.

Improvements..
    I have a lot of repeated code in my functions that change backgrounds/text color/style/etc... I want to improve this so it's cleaner and I'm not breaking the DRY rule.

Working...
    I want to add more features, roughly they would look like...
        var killer => randomly spawns in a room.
            // changes rooms when user changes room
            // has three 'modes' that affect the user
                // 'hidden' => is dangerous to the user increments user danger variable
                //  'vulnerable' => is available for the user to kill
                //  'exposed' => user can see the AI, but can't interact with it
        var dangerLevel => increments when the killer is hidden and in the same/adjacent room
        people object => random AI 'people' in the map
            should be relatively simple to add it, I can use a lot of the funcitons that I currently have and with some changes the user can interact with these AI
        var gameOver
            // you kill the killer
            // killer kills you
            // you escape the map
        var restartGame
            // clears the html
            // game starts at start


