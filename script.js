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
  

