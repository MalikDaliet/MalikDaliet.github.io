//console.log("hi")
//it sets the properties for the dots
function makeDot() {
  $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", "black")
      .css("position", "absolute")
      .css("top", 50)
      .css("left", 50)
      .appendTo("#die");
}

//rolls die
function rollDie(dieID) {
  $('#die').empty();
    var randomNum = Math.ceil(Math.random() * 6);
  if (randomNum === 1) {
    makeDot(50, 50, dieID); // middle middle
  } else if (randomNum === 2) {
    makeDot(25, 25, dieID); // top left
    makeDot(75, 75, dieID); // bottom right
  } else if (randomNum === 3) {
    makeDot(25, 25, dieID); // top left
    makeDot(75, 75, dieID); // bottom right
    makeDot(50, 50, dieID); // middle middle
  } else if (randomNum === 4) {
    makeDot(75, 75, dieID); // bottom right
    makeDot(25, 25, dieID); // top left
    makeDot(25, 75, dieID); // bottom left
    makeDot(75, 25, dieID); // top right
  } else if (randomNum === 5) {
    makeDot(50, 50, dieID); // middle middle
    makeDot(75, 75, dieID); // bottom right
    makeDot(25, 25, dieID); // top left
    makeDot(25, 75, dieID); // bottom left
    makeDot(75, 25, dieID); // top right
  }
}
$("button").on("click", rollDie)
