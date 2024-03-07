document.addEventListener("DOMContentLoaded", function() {

var userIn = [];

var stringIn = ["red", "blue", "red", "blue"];

// getting all needed elements from HTML DOC

var redbutton = document.getElementById("red-button");
var bluebutton = document.getElementById("blue-button");
var greenbutton = document.getElementById("green-button");
var yellowbutton = document.getElementById("yellow-button");
var purplebutton = document.getElementById("purple-button");
var orangebutton = document.getElementById("orange-button");
var activate = document.getElementById("activate");
const output = document.getElementById("output");
const indicator = document.getElementById("indexIndicator");

// initiating button disabled variables

var redbuttonDisabled = false;
var greenbuttonDisabled = false;
var orangebuttonDisabled = false;
var purplebuttonDisabled = false;
var bluebuttonDisabled = false;
var yellowbuttonDisabled = false;

// experimental testing function

function showString() {
    console.log(stringIn);
}

// functions to randomly append colors to stringIn array

function randomColorGen() {
    var index = getRandomInt(0, 5);
    var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    stringIn.push(colors[index]);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// wrong and right output functions

function wrong() {
    alert(userIn + " wrong");
}

function right() {
    alert(userIn + " correct sequence detected");
}

// function that checks string for correctness

function checkCorrectness() {

    var isCorrect = true;

    for (i = 0; i < stringIn.length; i++) {

    if (userIn[i] != stringIn[i]) {
        wrong();
        userIn.length = 0;
        isCorrect = false;
        break;
    }
}

    if (isCorrect == true) {
        right();
        userIn.length = 0;
    }

}

// functions for animation of indexIndicator

function changeColor(index) {
    return new Promise(() => {
    if (index < stringIn.length) {
        // Set the background color of the block to the current color
        indicator.style.backgroundColor = stringIn[index];
        // Schedule the next color change after a delay
        setTimeout(() => changeColor(index + 1), 1000); // Change color every 1000 milliseconds (1 second)
    } else {
        output.disabled = false; // Re-enable the button when animation completes
    }
});
}

async function startAnimation() {
    disableInput();
 
    await changeColor(0); // Start the animation from the first color (index 0)

    enableInput();
    
}


// Add an event listener to the button when the page loads

window.onload = function() {

};


function enableInput() {
    redbuttonDisabled = false;
    greenbuttonDisabled = false;
    orangebuttonDisabled = false;
    purplebuttonDisabled = false;
    bluebuttonDisabled = false;
    yellowbuttonDisabled = false;
}

function disableInput() {
    redbuttonDisabled = true;
    greenbuttonDisabled = true;
    orangebuttonDisabled = true;
    purplebuttonDisabled = true;
    bluebuttonDisabled = true;
    yellowbuttonDisabled = true;
}

// Below, we are just adding event listeners for all of the buttons

redbutton.addEventListener("click", function() {

    if (!redbuttonDisabled) {

    userIn.push('red');
    playTone();

    };
});

bluebutton.addEventListener("click", function() {
    
    if (!bluebuttonDisabled) {

        userIn.push('blue');
        playTone();

        };

});

greenbutton.addEventListener("click", function() {
    
    if (!greenbuttonDisabled) {

        userIn.push('green');
        playTone();

        };

});

yellowbutton.addEventListener("click", function() {
    
    if (!yellowbuttonDisabled) {

        userIn.push('yellow');
        playTone();

        };

});

purplebutton.addEventListener("click", function() {
    
    if (!purplebuttonDisabled) {

        userIn.push('purple');
        playTone();

        };

});

orangebutton.addEventListener("click", function() {

    if (!orangebuttonDisabled) {

        userIn.push('orange');
        playTone();

        };

});



// Here, we check whether the input string matches the displayed string

activate.addEventListener('click', checkCorrectness);


// This is where we add the animation of the display block 

output.addEventListener('click', startAnimation);

// end of event listener section





});






