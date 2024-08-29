/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  // SETUP...
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  // CORE LOGIC...




  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
  };
  // Game Item Objects

  var walker = {
    x: 0,
    y: 0,
    speedXAxis: 0,
    speedYAxis: 0
  }


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  //  making my buttons work and changing the speed
  function handleKeyDown(event) {
    if (event.which === KEY.DOWN) {
      walker.speedYAxis = +5
      console.log("down key");
    }

    if (event.which === KEY.UP) {
      walker.speedYAxis = -5
      console.log("up key")
    }
    // moving left and right
    if (event.which === KEY.RIGHT) {
      walker.speedXAxis = +5
      console.log("right key")
    }

    if (event.which === KEY.LEFT) {
      walker.speedXAxis = -5
      console.log("left key")
    }
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
  }
  function handleKeyUp(event) {
    if (event.which === KEY.DOWN) {
      walker.speedYAxis = 0
      console.log("down key");
    }

    if (event.which === KEY.UP) {
      walker.speedYAxis = 0
      console.log("up key")
    }
    // moving left and right
    if (event.which === KEY.RIGHT) {
      walker.speedXAxis = 0
      console.log("right key")
    }

    if (event.which === KEY.LEFT) {
      walker.speedXAxis = 0
      console.log("left key")
    }
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
  }

  function repositionGameItem() {
    walker.x += walker.speedXAxis
    walker.y += walker.speedYAxis
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x)
    $("#walker").css("top", walker.y);
  }

  //helper function
  function wallCollision() {
    var borderX = $("#board").width()
    var borderY = $("#board").height()
    if (walker.x >= borderX){
      walker.x -= walker.speedXAxis  
    }
    if (walker.y >= borderY) {
      walker.y -= walker.speedYAxis
    }
    if (walker.x <= 0){
      walker.x -= walker.speedXAxis  
    }
    if (walker.y <= 0) {
      walker.y -= walker.speedYAxis
    }
  }

  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()


  }

  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}

