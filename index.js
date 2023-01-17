var array = document.querySelectorAll("button");
var i = 0;

for (i = 0; i < 7; i++) {
  array[i].addEventListener("click", handleClick);

}

document.addEventListener("keydown", function(event){
  handlePress(event.key);
  addAnimation(event.key)
});

function handleClick() {
  var buttonHTML = this.textContent;

  if(buttonHTML == "w"){
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
  }

  if(buttonHTML == "a"){
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play();
  }

  if(buttonHTML == "s"){
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play();
  }

  if(buttonHTML == "d"){
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play();
  }

  if(buttonHTML == "j"){
    var audio = new Audio("sounds/snare.mp3")
    audio.play();
  }

  if(buttonHTML == "k"){
    var audio = new Audio("sounds/crash.mp3")
    audio.play();
  }

  if(buttonHTML == "l"){
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
  }
  addAnimation(buttonHTML);
}

function handlePress(key) {
  var buttonHTML = key;

  if(buttonHTML == "w"){
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
  }

  if(buttonHTML == "a"){
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play();
  }

  if(buttonHTML == "s"){
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play();
  }

  if(buttonHTML == "d"){
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play();
  }

  if(buttonHTML == "j"){
    var audio = new Audio("sounds/snare.mp3")
    audio.play();
  }

  if(buttonHTML == "k"){
    var audio = new Audio("sounds/crash.mp3")
    audio.play();
  }

  if(buttonHTML == "l"){
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
  }
}

function addAnimation(key){
  var ani = document.querySelector("."+key);
  ani.classList.add("pressed");
  setTimeout(function(){ani.classList.remove("pressed");}, 100);
}
