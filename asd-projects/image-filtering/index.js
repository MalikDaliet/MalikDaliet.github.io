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
  applyFilterNoBackground(decreaseBlue)
  applyFilterNoBackground(reddify)
  applyFilterNoBackground(increaseGreenByBlue)


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    let row = image[i]
    for (let j = 0; j < row.length; j++) {
      //console.log(row[j])
      let rgbString = row[j]
      let rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      //return rgbNumbes
      // rgb is a string
      // console.log(typeof rgbString)
      //an array op numbers
      //console.log({ rgbString, rgbNumbers })
      rgbString = rgbArrayToString(rgbNumbers)
      row[j] = rgbString
      filterFunction(rgbNumbers)

    }
    console.log(row)
  }

}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  let backgroundColor =  image[0][0]  
  for (let i = 0; i < image.length; i++) {
      let row = image[i]
      for (let j = 0; j < row.length; j++) {
        //console.log(row[j])
        let rgbString = row[j]
        let rgbNumbers = rgbStringToArray(rgbString)
        if (rgbString !== backgroundColor) {
          //return rgbNumbes
          // rgb is a string
          // console.log(typeof rgbString)
          //an array op numbers
          //console.log({ rgbString, rgbNumbers })
          filterFunction(rgbNumbers)
          rgbString = rgbArrayToString(rgbNumbers)
          row[j] = rgbString
    

        }
      }
      console.log(row)
    }
  
  }


// TODO 5: Create the keepInBounds function
function keepInBounds(numbers) {
  numbers = Math.max(numbers, 0)
  numbers = Math.min(numbers, 255)
  return numbers
}


// TODO 3: Create reddify function
function reddify(arr) {
  arr[RED] = 200

}

// TODO 6: Create more filter functions
function decreaseBlue(arr) {
  arr[BLUE] = keepInBounds(arr[BLUE] - 50);
}

function increaseGreenByBlue(arr) {
  arr[GREEN] = keepInBounds(arr[GREEN] + arr[BLUE])
}

// CHALLENGE code goes below here
