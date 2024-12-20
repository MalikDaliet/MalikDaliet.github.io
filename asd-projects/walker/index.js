/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const key = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ENTER: 13
  }

  // Game Item Objects
  let walker = {
    x: 0,
    y: 0,
    speedXAxis: 0,
    speedYAxis: 0
  }


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp)
  // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    respoitionGameItem()
     wallCollision()
    redrawGameItem()

  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === key.ENTER) {
      console.log("enter pressed")
    }
    if (event.which === key.UP) {
      walker.speedYAxis = -5
      console.log("up pressed")
    }
    if (event.which === key.DOWN) {
      walker.speedYAxis = 5
      console.log("down pressed")
    }
    if (event.which === key.LEFT) {
      walker.speedXAxis = -5
      console.log("left pressed")
    }
    if (event.which === key.RIGHT) {
      walker.speedXAxis = 5
      console.log("right pressed")
    }
  }

  function handleKeyUp(event) {
    if (event.which === key.DOWN) {
      walker.speedYAxis = 0
      console.log("down key");
    }

    if (event.which === key.UP) {
      walker.speedYAxis = 0
      console.log("up key")
    }
    // moving left and right
    if (event.which === key.RIGHT) {
      walker.speedXAxis = 0
      console.log("right key")
    }

    if (event.which === key.LEFT) {
      walker.speedXAxis = 0
      console.log("left key")
    }
    if (event.which === key.ENTER) {
      console.log("enter pressed");
    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function respoitionGameItem() {
    walker.x += walker.speedXAxis
    walker.y += walker.speedYAxis
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x)
    $("#walker").css("top", walker.y)
  }

  function wallCollision() {
    let boarderX = $("#board").width() - $("#walker").width()
    let boarderY = $("#board").height() - $("#walker").height()

    if (walker.x >= boarderX) {
      walker.x = boarderX
    }
    if (walker.y >= boarderY) {
      walker.y = boarderY
    }
    if (walker.x <= 0) {
      walker.x = 0
    }
    if (walker.y <= 0) {
      walker.y = 0
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
