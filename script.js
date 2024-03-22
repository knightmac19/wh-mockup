var generateBtn = document.querySelector(".generate-btn");
var resetBtn = document.querySelector(".reset-btn");

var resultsSection = document.querySelector(".results");

var currentActiveCell = 1;
var initialActiveCell = 1;
var currentActiveRow = "row-one";

var firstMustBe = "";
var secondMustBe = "";
var thirdMustBe = "";
var fourthMustBe = "";
var fifthMustBe = "";

var lettersThatCantBeUsed = "";
var mustBeUsed = "";

var positionOneCantBe = "";
var positionTwoCantBe = "";
var positionThreeCantBe = "";
var positionFourCantBe = "";
var positionFiveCantBe = "";

const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) => {
  tile.addEventListener("click", function (e) {
    let el = e.target;

    let absolute = el.getAttribute("data-absolute");
    let necessary = el.getAttribute("data-necessary");
    let verboten = el.getAttribute("data-verboten");

    if (absolute == "false" && necessary == "false" && verboten == "false") {
      el.setAttribute("data-absolute", "true");
      el.classList.add("right-letter-right-pos");
    }

    if (absolute == "true" && necessary == "false" && verboten == "false") {
      el.setAttribute("data-necessary", "true");
      el.classList.remove("right-letter-right-pos");
      el.classList.add("right-letter-wrong-pos");
    }

    if (absolute == "true" && necessary == "true" && verboten == "false") {
      el.setAttribute("data-verboten", "true");
      el.classList.remove("right-letter-wrong-pos");
      el.classList.add("wrong-letter");
    }

    if (absolute == "true" && necessary == "true" && verboten == "true") {
      el.setAttribute("data-absolute", "false");
      el.setAttribute("data-necessary", "false");
      el.setAttribute("data-verboten", "false");
      el.classList.remove(
        "right-letter-right-pos",
        "right-letter-wrong-pos",
        "wrong-letter"
      );
    }
  });
});

var keyboardKeys = document.querySelectorAll(".keyboard-key");

keyboardKeys.forEach((key) => {
  key.addEventListener("click", function (e) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let currentTile = document.querySelector(
      `[data-id="${currentActiveCell}"]`
    );

    // only allow text to be added for the current row
    if (!currentTile.parentNode.classList.contains(currentActiveRow)) {
      return;
    } else {
      if (e.target.textContent === "DEL") {
        if (currentActiveCell % 5 === 1 && currentTile.textContent === "") {
          return;
        }
        if (currentActiveCell % 5 === 0 && currentTile.textContent !== "") {
          currentTile.textContent = "";
        } else {
          currentActiveCell--;
          currentTile = document.querySelector(
            `[data-id="${currentActiveCell}"]`
          );
          currentTile.textContent = "";
        }
      } else if (!letters.includes(e.key)) {
        return;
      } else {
        currentTile.textContent = e.key.toUpperCase();
        currentActiveCell++;
      }
    }

    if (currentActiveCell > initialActiveCell + 4) {
      currentActiveCell = initialActiveCell + 4;
    }
  });
});

document.addEventListener("keydown", function (e) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let currentTile = document.querySelector(`[data-id="${currentActiveCell}"]`);

  // only allow text to be added for the current row
  if (!currentTile.parentNode.classList.contains(currentActiveRow)) {
    return;
  } else {
    if (e.key === "Backspace") {
      if (currentActiveCell % 5 === 1 && currentTile.textContent === "") {
        return;
      }
      if (currentActiveCell % 5 === 0 && currentTile.textContent !== "") {
        currentTile.textContent = "";
      } else {
        currentActiveCell--;
        currentTile = document.querySelector(
          `[data-id="${currentActiveCell}"]`
        );
        currentTile.textContent = "";
      }
    } else if (!letters.includes(e.key)) {
      return;
    } else {
      currentTile.textContent = e.key.toUpperCase();
      currentActiveCell++;
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
    generateBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
  }
};

const setTileProperties = (offsetFromLast) => {
  let tile = document.querySelector(
    `[data-id="${currentActiveCell - offsetFromLast}"]`
  );

  let letter = tile.textContent;

  if (offsetFromLast == 4) {
    if (tile.classList.contains("right-letter-right-pos")) {
      firstMustBe = letter;
      mustBeUsed += letter;
    }

    if (tile.classList.contains("right-letter-wrong-pos")) {
      mustBeUsed += letter;
      positionOneCantBe += letter;
    }

    if (tile.classList.contains("wrong-letter")) {
      lettersThatCantBeUsed += letter;
    }
  } else if (offsetFromLast == 3) {
    if (tile.classList.contains("right-letter-right-pos")) {
      secondMustBe = letter;
      mustBeUsed += letter;
    }

    if (tile.classList.contains("right-letter-wrong-pos")) {
      mustBeUsed += letter;
      positionTwoCantBe += letter;
    }

    if (tile.classList.contains("wrong-letter")) {
      lettersThatCantBeUsed += letter;
    }
  } else if (offsetFromLast == 2) {
    if (tile.classList.contains("right-letter-right-pos")) {
      thirdMustBe = letter;
      mustBeUsed += letter;
    }

    if (tile.classList.contains("right-letter-wrong-pos")) {
      mustBeUsed += letter;
      positionThreeCantBe += letter;
    }

    if (tile.classList.contains("wrong-letter")) {
      lettersThatCantBeUsed += letter;
    }
  } else if (offsetFromLast == 1) {
    if (tile.classList.contains("right-letter-right-pos")) {
      fourthMustBe = letter;
      mustBeUsed += letter;
    }

    if (tile.classList.contains("right-letter-wrong-pos")) {
      mustBeUsed += letter;
      positionFourCantBe += letter;
    }

    if (tile.classList.contains("wrong-letter")) {
      lettersThatCantBeUsed += letter;
    }
  } else {
    if (tile.classList.contains("right-letter-right-pos")) {
      fifthMustBe = letter;
      mustBeUsed += letter;
    }

    if (tile.classList.contains("right-letter-wrong-pos")) {
      mustBeUsed += letter;
      positionFiveCantBe += letter;
    }

    if (tile.classList.contains("wrong-letter")) {
      lettersThatCantBeUsed += letter;
    }
  }
};

generateBtn.addEventListener("click", function () {
  setTileProperties(4);
  setTileProperties(3);
  setTileProperties(2);
  setTileProperties(1);
  setTileProperties(0);

  let results = makeGuess();

  renderResultsToPage(results);

  updateActiveRow();
});

const renderResultsToPage = (arr) => {
  resultsSection.innerHTML = "";

  for (var i = 0; i < arr.length; i++) {
    let span = document.createElement("span");
    span.classList.add("guess");
    span.textContent = arr[i];
    resultsSection.appendChild(span);
  }
};

const resetAll = () => {
  window.location.reload();
  // tiles.forEach((tile) => {
  //   tile.setAttribute("data-absolute", "false");
  //   tile.setAttribute("data-necessary", "false");
  //   tile.setAttribute("data-verboten", "false");
  //   tile.classList.remove(
  //     "right-letter-right-pos",
  //     "right-letter-wrong-pos",
  //     "wrong-letter"
  //   );
  //   tile.textContent = "";
  // });
  // firstMustBe = "";
  // secondMustBe = "";
  // thirdMustBe = "";
  // fourthMustBe = "";
  // fifthMustBe = "";

  // lettersThatCantBeUsed = "";
  // mustBeUsed = "";

  // positionOneCantBe = "";
  // positionTwoCantBe = "";
  // positionThreeCantBe = "";
  // positionFourCantBe = "";
  // positionFiveCantBe = "";

  // currentActiveCell = 1;
  // initialActiveCell = 1;
  // currentActiveRow = "row-one";

  // resultsSection.innerHTML = "";
};

resetBtn.addEventListener("click", function () {
  resetAll();
});

// renderResultsToPage(wordsArray);
