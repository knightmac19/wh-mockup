var thisIsTrue = true;

var tile1 = document.querySelector('#one');
// var tile2 = document.querySelector('#1-2');
// var tile3 = document.querySelector('#1-3');
// var tile4 = document.querySelector('#1-4');
// var tile5 = document.querySelector('#1-5');
// var tile6 = document.querySelector('#1-6');

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

document.addEventListener('keydown', function(e) {
  
  
  // console.log(`this is now ${thisIsTrue}`);
  let letters = 'abcdefghijklmnopqrstuvwxyz';

  
  if (!letters.includes(e.key)) {

    console.log('invalid key!');
    return;
  } else {
    
    document.querySelector(`[data-id="${currentActiveCell}" ]`).textContent=e.key.toUpperCase();
        // set second row active
    currentActiveCell++

      // if(activeRows[0].active) {
      //   document.querySelector(`${currentActiveCell}`).textContent=e.key.toUpperCase();
      //   // set second row active
      //   currentActiveCell++
      //   // setActiveRow(1, activeRows);
        
      // } else if(activeRows[1].active) {
        
      //   // set third row active
      //   setActiveRow(2, activeRows);
        
      // } else if(activeRows[2].active) {
        
      //   // set fourth row active
      //   setActiveRow(3, activeRows);
        
      // } else if(activeRows[3].active) {
        
      //   // set fifth row active
      //   setActiveRow(4, activeRows);
        
      // } else if(activeRows[4].active) {
        
      //   // set sixth row active
      //   setActiveRow(5, activeRows);
        
      // } else {
        
      // }
    }
});
  

