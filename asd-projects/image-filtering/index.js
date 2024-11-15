// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFiller(reddify)


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFiller(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    let row = image[i]
    for (let j = 0; j < row.length; j++) {
      let rgbString = row[j]
      let rgbNumbers = rgbArrayToString(rgbNumbers)
      filterFunction (rgbNumbers)
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground() {
  function applyFiller(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    let row = image[i]
    for (let j = 0; j < row.length; j++) {
      let rgbString = row[j]
      let rgbNumbers = rgbArrayToString(rgbNumbers)
     if (rgb)
      filterFunction (rgbNumbers)
    }
  }
}

}

// TODO 5: Create the keepInBounds function
function keepInBounds (arr) {
  arr = Math.max(arr, 0)
  arr = Math.min (arr, 255)
}

// TODO 3: Create reddify function
function reddify(arr){
  arr[RED]= 200 
}

// TODO 6: Create more filter functions
function decreaseBlue (arr){
  arr[BLUE]= keepInBounds (arr[BLUE - 50]) 
}
function increaseGreenByBlue (arr ) {
  arr [GREEN] = keepInBounds (arr[BLUE] + arr[GREEN])
}
// CHALLENGE code goes below here
