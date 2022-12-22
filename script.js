
var generateBtn = document.querySelector('.generate-btn');
var resetBtn = document.querySelector('.reset-btn');

var currentActiveCell = 1;
var initialActiveCell = 1;
var currentActiveRow = "row-one";

var firstMustBe = '';
var secondMustBe = '';
var thirdMustBe = '';
var fourthMustBe = '';
var fifthMustBe = '';

var lettersThatCantBeUsed = '';
var mustBeUsed = '';
  
var positionOneCantBe = '';
var positionTwoCantBe = '';
var positionThreeCantBe = '';
var positionFourCantBe = '';
var positionFiveCantBe = '';

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

const tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => {
  tile.addEventListener('click', function(e) {
    
    let el = e.target
  
    let absolute = el.getAttribute('data-absolute');
    let necessary = el.getAttribute('data-necessary');
    let verboten = el.getAttribute('data-verboten');
  
    if (absolute == 'false' && necessary == 'false' && verboten == 'false') {
      el.setAttribute('data-absolute', 'true');
      el.classList.add('right-letter-right-pos');
    } 
    
    if (absolute == 'true' && necessary == 'false' && verboten == 'false') {
      el.setAttribute('data-necessary', 'true');
      el.classList.remove('right-letter-right-pos');
      el.classList.add('right-letter-wrong-pos');
    } 
  
    if (absolute == 'true' && necessary == 'true' && verboten == 'false') {
      el.setAttribute('data-verboten', 'true');
      el.classList.remove('right-letter-wrong-pos');
      el.classList.add('wrong-letter');
    } 
  
    if (absolute == 'true' && necessary == 'true' && verboten == 'true') {
      
      el.setAttribute('data-absolute', 'false');
      el.setAttribute('data-necessary', 'false');
      el.setAttribute('data-verboten', 'false');
      el.classList.remove('right-letter-right-pos', 'right-letter-wrong-pos', 'wrong-letter');
    } 
  
  });
});



document.addEventListener('keydown', function(e) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let currentTile = document.querySelector(`[data-id="${currentActiveCell}"]`);

  // console.log(currentActiveCell);
  
  // only allow text to be added for the current row
  if (!currentTile.parentNode.classList.contains(currentActiveRow)) {
    console.log(currentActiveRow + '\n');
    console.log(currentTile);
    return;

  } else {
    
    if (e.key === "Backspace") {
      if (currentActiveCell == 1) {
        currentTile.textContent="";
        return;
      } 
      currentActiveCell--;
      currentTile.textContent="";
    } else if (!letters.includes(e.key)) {
  
      console.log('invalid key!');
      return;
    } else {
      
      currentTile.textContent=e.key.toUpperCase();
      currentActiveCell++
  
    }
  }

  if (currentActiveCell > initialActiveCell + 4) {
    currentActiveCell = initialActiveCell + 4;
  }
  
});

const updateActiveRow = () => {
  if (currentActiveRow === "row-one") {
    currentActiveRow = "row-two";
    currentActiveCell = 6;
    initialActiveCell = 6;
  } else if (currentActiveRow === "row-two") {
    currentActiveRow = "row-three";
    currentActiveCell = 11;
    initialActiveCell = 11;
  } else if (currentActiveRow === "row-three") {
    currentActiveRow = "row-four";
    currentActiveCell = 16;
    initialActiveCell = 16;
  } else if (currentActiveRow === "row-four") {
    currentActiveRow = "row-five";
    currentActiveCell = 21;
    initialActiveCell = 21;
  } else if (currentActiveRow === "row-five") {
    currentActiveRow = "row-six";
    currentActiveCell = 26;
    initialActiveCell = 26;
  } else {
    generateBtn.classList.add('hide');
    resetBtn.classList.remove('hide');
  }
}

resetBtn.addEventListener('click', function() {
  generateBtn.classList.remove('hide');
  resetBtn.classList.add('hide');
});

const setTileProperties = offsetFromLast => {
  let tile = document.querySelector(`[data-id="${currentActiveCell - offsetFromLast}"]`);

  let letter = tile.textContent;

  if (offsetFromLast == 4) {
    if (tile.classList.contains('right-letter-right-pos')) {
      firstMustBe = letter;
      mustBeUsed += letter;
    }
    
    if (tile.classList.contains('right-letter-wrong-pos')) {
      mustBeUsed += letter;
      positionOneCantBe += letter;
    }

    if (tile.classList.contains('wrong-letter')) {
      lettersThatCantBeUsed += letter;
    }
  } else if (offsetFromLast == 3) {
    if (tile.classList.contains('right-letter-right-pos')) {
      secondMustBe = letter;
      mustBeUsed += letter;
    }
    
    if (tile.classList.contains('right-letter-wrong-pos')) {
      mustBeUsed += letter;
      positionTwoCantBe += letter;
    }

    if (tile.classList.contains('wrong-letter')) {
      lettersThatCantBeUsed += letter;
    }
  } else if (offsetFromLast == 2) {
    if (tile.classList.contains('right-letter-right-pos')) {
      thirdMustBe = letter;
      mustBeUsed += letter;
    }
    
    if (tile.classList.contains('right-letter-wrong-pos')) {
      mustBeUsed += letter;
      positionThreeCantBe += letter;
    }

    if (tile.classList.contains('wrong-letter')) {
      lettersThatCantBeUsed += letter;
    }

  } else if (offsetFromLast == 1) {
    if (tile.classList.contains('right-letter-right-pos')) {
      fourthMustBe = letter;
      mustBeUsed += letter;
    }
    
    if (tile.classList.contains('right-letter-wrong-pos')) {
      mustBeUsed += letter;
      positionFourCantBe += letter;
    }

    if (tile.classList.contains('wrong-letter')) {
      lettersThatCantBeUsed += letter;
    }
  } else {
    if (tile.classList.contains('right-letter-right-pos')) {
      fifthMustBe = letter;
      mustBeUsed += letter;
    }
    
    if (tile.classList.contains('right-letter-wrong-pos')) {
      mustBeUsed += letter;
      positionFiveCantBe += letter;
    }

    if (tile.classList.contains('wrong-letter')) {
      lettersThatCantBeUsed += letter;
    }
  }

  // console.log(`
  // firstMustBe = ${firstMustBe} \n
  // secondMustBe = ${secondMustBe} \n
  // thirdMustBe = ${thirdMustBe} \n
  // fourthMustBe = ${fourthMustBe} \n
  // fifthMustBe = ${fifthMustBe} \n

  // lettersThatCantBeUsed = ${lettersThatCantBeUsed} \n
  // mustBeUsed = ${mustBeUsed} \n
  
  // positionOneCantBe = ${positionOneCantBe} \n
  // positionTwoCantBe = ${positionTwoCantBe} \n
  // positionThreeCantBe = ${positionThreeCantBe} \n
  // positionFourCantBe = ${positionFourCantBe} \n
  // positionFiveCantBe = ${positionFiveCantBe}`
  // );
}

generateBtn.addEventListener('click', function() {
  // console.log('generate btn clicked!')
  

  setTileProperties(4);
  setTileProperties(3);
  setTileProperties(2);
  setTileProperties(1);
  setTileProperties(0);

  console.log(`
  firstMustBe = ${firstMustBe} \n
  secondMustBe = ${secondMustBe} \n
  thirdMustBe = ${thirdMustBe} \n
  fourthMustBe = ${fourthMustBe} \n
  fifthMustBe = ${fifthMustBe} \n

  lettersThatCantBeUsed = ${lettersThatCantBeUsed} \n
  mustBeUsed = ${mustBeUsed} \n
  
  positionOneCantBe = ${positionOneCantBe} \n
  positionTwoCantBe = ${positionTwoCantBe} \n
  positionThreeCantBe = ${positionThreeCantBe} \n
  positionFourCantBe = ${positionFourCantBe} \n
  positionFiveCantBe = ${positionFiveCantBe}`
  );

  updateActiveRow();
  // console.log('active row ' + currentActiveRow)


});

// todo: 
  // run the script to filter based on global letter variable statuses
  // print the recommended word to the page
  // render an element to the page for each word in the results array
  // reset all tiles' textContent, classes, data- attributes, as well as the global variables when the reset button is clicked
  

