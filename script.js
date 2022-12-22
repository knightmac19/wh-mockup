


var currentActiveCell = 1;
var initialActiveCell = 1;
var currentActiveRow = "row-one";

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
      el.classList.add('right-letter-wrong-pos');
    } 
  
    if (absolute == 'true' && necessary == 'true' && verboten == 'false') {
      el.setAttribute('data-verboten', 'true');
      el.classList.add('wrong-letter');
    } 
  
    if (absolute == 'true' && necessary == 'true' && verboten == 'true') {
      
      el.setAttribute('data-absolute', 'false');
      el.setAttribute('data-necessary', 'false');
      el.setAttribute('data-verboten', 'false');
      el.classList.remove('right-letter-right-pos', 'right-letter-wrong-pos', 'wrong-letter');
    } 
  
  });
})



document.addEventListener('keydown', function(e) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let currentTile = document.querySelector(`[data-id="${currentActiveCell}"]`);

  console.log(currentActiveCell);
  
  // only allow text to be added for the current row
  if (!currentTile.parentNode.classList.contains(currentActiveRow)) {
    console.log(currentActiveRow + '\n');
    console.log(currentTile);
    return;

  } else {
    
    if (e.key === "Backspace") {
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

  if (currentActiveCell > 5) {
    currentActiveCell = 5;
  }
  
  

  
});
  

