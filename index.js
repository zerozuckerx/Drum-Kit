const buttonArray = document.querySelectorAll(".drum");

for(let i = 0; i < buttonArray.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "a":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "s":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "d":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "l":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  });
}
