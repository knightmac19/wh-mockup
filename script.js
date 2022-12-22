

var activeRows = [
  {
    active: true
  },
  {
    active: false
  },
  {
    active: false
  },
  {
    active: false
  },
  {
    active: false
  },
  {
    active: false
  }
];

const setActiveRow = (indexToBeActive, arr) => {
  
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] == indexToBeActive) {
      arr[i].active = true;
    } else {
      arr[i].active = false;
    }
    
  }

  return arr;
}

var currentActiveCell = 1;
var initialActiveCell = 1;

// Todos:
  // set conditional where if currentActiveCell === initialActiveCell + 5, 
  // THEN set currentActiveCell to be initialActiveCell + 4

  // set the first row as active row
  // add currentActiveRow variable set as an integer
  
  // add conditional to only run the 'keydown' event listener for the current active row
    // first check to see what the currentActiveRow is
    // then set the currentActiveCell and initialActiveCell values accordingly 
  
  // add "Generate guesses" button
    // when "Generate guesses" is fired --> 
      // set the currentActiveRow
      // set the necessary variables
      // run all the calculations
      // append an element to the page for each word in the results array
      // include the recommended word up top

  // add CSS classes for:
    // correct position + correct letter
    // incorrect position + correct letter
    // incorrect position + incorrect letter (lettersThatCantBeUsed)
  
  // include 'data-absolute', 'data-necessary' and 'data-verboten' values
  // add event listener for the 'tile' class =>
    // if !data-absolute && !data-necessary && !data-verboten => 
      // data-absolute=true
      // add styling class for correct position + correct letter
      // else if !data-necessary && !data-verboten =>
        // data-necessary=true
        // add styling class for incorrect position + correct letter
      // else =>
        // data-verboten=true
        // add styling class for incorrect position + incorrect letter (lettersThatCantBeUsed)

  // create variables for 
    // var firstMustBe = '';
    // var secondMustBe = '';
    // var thirdMustBe = '';
    // var fourthMustBe = '';
    // var fifthMustBe = '';

    // var lettersThatCantBeUsed = '';
    // var mustBeUsed = '';
    
    // var positionOneCantBe = '';
    // var positionTwoCantBe = '';
    // var positionThreeCantBe = '';
    // var positionFourCantBe = '';
    // var positionFiveCantBe = '';

document.addEventListener('keydown', function(e) {
  
  
  // console.log(`this is now ${thisIsTrue}`);
  let letters = 'abcdefghijklmnopqrstuvwxyz';

  // allow users to backspace something
  if (e.key === "Backspace") {
    currentActiveCell--;
    document.querySelector(`[data-id="${currentActiveCell}"]`).textContent="";
  } else if (!letters.includes(e.key)) {

    console.log('invalid key!');
    return;
  } else {
    
    document.querySelector(`[data-id="${currentActiveCell}"]`).textContent=e.key.toUpperCase();
    currentActiveCell++

    }
});
  

