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
  //applyFilter(reddify);
  //applyFilterNoBackground(reddify)
  //applyFilter(decreaseBlue)
  //applyFilterNoBackground(decreaseBlue);
  //applyFilter(increaseGreenByBlue);
 // applyFilterNoBackground(increaseGreenByBlue)
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      // console.log(image[i][j]);
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      //pixelArray[RED] = 200;
      filterFunction(pixelArray);
      let updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
      // console.log(typeof pixel);
      // console.log("pixelArray:", pixelArray);
      // console.log("updatedPixel:", updatedPixel);
      // Goal: Change the red value in each pixel’s color data by updating the pixelArray.
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      // console.log(image[i][j]);
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      //pixelArray[RED] = 200;
      if (image[i][j] !== backgroundColor) {
        
        filterFunction(pixelArray);
      }
      let updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
      // console.log(typeof pixel);
      // console.log("pixelArray:", pixelArray);
      // console.log("updatedPixel:", updatedPixel);
      // Goal: Change the red value in each pixel’s color data by updating the pixelArray.
    }
  }
}
// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  if (num < 0) {
    return 0;
  } else if (num > 255) {
    return 255;
  } else {
    return num;
  }
  decreaseBlue(arr);
  increaseGreenByBlue(arr);
}
// TODO 4: Create reddify filter function
function reddify(arr) {
  arr[RED] = 200;
}
// var testArray = [100, 100, 100];
// reddify(testArray);
// console.log(testArray); // Should show [200, 100, 100]

// TODO 7 & 8: Create more filter functions
function decreaseBlue(arr) {
  // arr[BLUE] -= 50;
  arr[BLUE] = keepInBounds(arr[BLUE] - 50);
}
function increaseGreenByBlue(arr) {
  arr[GREEN] += arr[BLUE];
  arr[GREEN] = keepInBounds(arr[GREEN] + arr[BLUE]);
}
// CHALLENGE code goes below here
