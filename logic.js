// ======================= LOGIC FILE =======================


// -------------------------- START FILE --------------------------
  
  
  // function to remove all words that DON'T include the firstLetter in the first position
  const returnStrictPosition = (position, letter, arr) => {
    if (letter === "") {
      return arr;
    } else {
      
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][position] !== letter) {
  
          arr.splice(i, 1);
          i--;
        }
      }
  
    }
    
    return arr;
    
  }

  
  // ----------- functions to remove words that contain forbidden letters -----------
  const removeIfContainsThisLetter = (letter, arr) => {

    for (var i = 0; i < arr.length; i ++) {
      if (arr[i].includes(letter)) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  const removeAllVerbotenLetters = (arr, verboten) => {

    if (verboten.length == 0) {
      return arr;
    } else {
      for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < verboten.length; j++) {
          removeIfContainsThisLetter(verboten[j], arr)
        }
        
      }


      return arr;
    }
    
  }
  // ----------- functions to remove words that contain forbidden letters -----------



  // ----------- functions to remove words that DON'T contain letters that MUST be included -----------
  const removeIfLetterNOTincluded = (letter, arr) => {

    for (var i = 0; i < arr.length; i ++) {
      if (!arr[i].includes(letter)) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  const removeWordsWithoutNecessaryLetters = (arr, necessary) => {

    if (necessary.length == 0) {
      return arr;
    } else {
      for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < necessary.length; j++) {
          removeIfLetterNOTincluded(necessary[j], arr);
        }
        
      }

      return arr;
    }
    
  }
  // ----------- functions to remove words that DON'T contain letters that MUST be included -----------



  // ----------- functions to remove words that contain an included letter in an invalid position -----------
  const removeIfInWrongPosition = (position, letter, arr) => {

    for (var i = 0; i < arr.length; i ++) {
      if (arr[i][position] === letter) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  const removeWordsWithLettersInWrongPosition = (position, arr, verboten) => {
    if (verboten.length == 0) {



      return arr;
    } else {
      for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < verboten.length; j++) {
          removeIfInWrongPosition(position, verboten[j], arr);
        }
        
      }

      return arr;
    }
  }
  // ----------- functions to remove words that contain an included letter in an invalid position -----------



// ---------------------------------------- SET VERBOTEN AND LETTERS HERE ----------------------------------------
  


  
// ---------------------------------------- SET VERBOTEN AND LETTERS HERE ----------------------------------------

  const randomNextGuess = (arr) => {
    // let randomResult = '';
    let randomIndex = Math.floor(Math.random() * arr.length)


    let randomValue = arr[randomIndex];

    // only NOT recommend words with duplicate letters if the array is equal to or more than 30
    if (arr.length < 30) {



      return randomValue;

    } else {
      
      for (var i = 0; i < randomValue.length; i++) {
        for (var j = i + 1; j < randomValue.length; j++) {
          if (randomValue[i] === randomValue[j]) {
  
      
      
  
            randomNextGuess(arr);
  
          } else {
      
      
            return randomValue;
          }
        }
      }

    }

    
    
  }

  const makeGuess = () => {

    // letters that CAN'T be used
    const cantBeUsedArray = lettersThatCantBeUsed.split('');

    // letters that MUST be used
    const mustBeUsedArray = mustBeUsed.split('');

    // letters that can't be position One
    const positionOneCantBeArray = positionOneCantBe.split('');

    // letters that can't be position Two
    const positionTwoCantBeArray = positionTwoCantBe.split('');

    // letters that can't be position Three
    const positionThreeCantBeArray = positionThreeCantBe.split('');

    // letters that can't be position Four
    const positionFourCantBeArray = positionFourCantBe.split('');

    // letters that can't be position Five
    const positionFiveCantBeArray = positionFiveCantBe.split('');
      
    
    // a) remove all words that contain verboten letters 
    const cantIncludeArray = removeAllVerbotenLetters(wordsArray, cantBeUsedArray);

    // b) remove all words that don't contain all letters that NEED to be included
    const mustIncludeArray = removeWordsWithoutNecessaryLetters(cantIncludeArray, mustBeUsedArray);

    // c) remove all words that contain an included letter in the wrong place. For example,
    // "USUAL" is the solution and "FIEST" was guessed => "S" in position 4 was marked yellow.
    // Words with "S" in the 4th position (e.g. "FIEST" & "LEAST") should be removed while
    // words like "USUAL" & "START" should be returned
    const notOneArray = removeWordsWithLettersInWrongPosition(0, mustIncludeArray, positionOneCantBeArray);
    const notTwoArray = removeWordsWithLettersInWrongPosition(1, notOneArray, positionTwoCantBeArray);
    const notThreeArray = removeWordsWithLettersInWrongPosition(2, notTwoArray, positionThreeCantBeArray);
    const notFourArray = removeWordsWithLettersInWrongPosition(3, notThreeArray, positionFourCantBeArray);
    const notFiveArray = removeWordsWithLettersInWrongPosition(4, notFourArray, positionFiveCantBeArray);


    // d) if any letter is green (correct letter AND in correct position), THEN
    // remove all words that don't contain that specific letter in that specific position
    const strictFirstArray = returnStrictPosition(0, firstMustBe, notFiveArray);
    const strictSecondArray = returnStrictPosition(1, secondMustBe, strictFirstArray);
    const strictThirdArray = returnStrictPosition(2, thirdMustBe, strictSecondArray);
    const strictFourthArray = returnStrictPosition(3, fourthMustBe, strictThirdArray);
    return returnStrictPosition(4, fifthMustBe, strictFourthArray);

    // randomNextGuess(strictFifthArray);
    
    
    // return strictFifthArray;

    // e) update letters that can't be used, letters that must be used, and rigid position values
    // f) repeat
  }
  // ======================= LOGIC FILE =======================