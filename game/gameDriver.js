document.addEventListener("DOMContentLoaded", function() {

var startMe = document.getElementById("fireItUp");

// this is the game driver. It will use methods from the game.js file.

async function gameDriver() {
    alert("hello. game is started.");

    for (i = 0; i < 3; i++) {
        randomColorGen();
        
    }
}

startMe.addEventListener("click", function() {
    
    alert("hello. game is started.");
    for (i = 0; i < 3; i++) {
        randomColorGen();
        
        showString();

    }
    
});



});
