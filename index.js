//Detecting Button Press
var numberOfDrumsButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumsButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var innerHTMLofbutton = this.innerHTML;
        makeSound(innerHTMLofbutton);
        buttonAnimation(innerHTMLofbutton);

    })
}

//Detecting Keyboard Press

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}
);


function makeSound(key) {

    switch (key) {
        case "w":
            var kick = new Audio('DrumSounds/kick-bass.mp3');
            kick.play();
            break;
        case "a":
            var tom1 = new Audio('DrumSounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio('DrumSounds/tom-2.mp3');
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio('DrumSounds/tom-3.mp3');
            tom3.play();
            break;
        case "j":
            var tom4 = new Audio('DrumSounds/tom-4.mp3');
            tom4.play();
            break;
        case "k":
            var snare = new Audio('DrumSounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var crash = new Audio('DrumSounds/crash.mp3');
            crash.play();
            break;
        default:
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
    activeButton.classList.remove("pressed");}, 1000
)
}