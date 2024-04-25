//  Update #pagethemeHeading text

function updatePagethemeHeading() {
  let headingToUpdate = document.getElementById("pageThemeHeading");
  headingToUpdate.textContent = getStoredPageTheme();
}

//  Update #pageThemeButton text

function updatePageThemeButtonText() {
  let buttonToUpdate = document.getElementById("pageThemeButton");
  let textToShow = "";
  if (getStoredPageTheme() === "dark") {
    textToShow = "Toggle to Light Mode";
  } else {
    textToShow = "Toggle to Dark Mode";
  }
  buttonToUpdate.textContent = textToShow;
}

//  Add onclick to #pageThemeButton

function togglePageTheme() {
  if (getStoredPageTheme() === "dark") {
    pageTheme = "light";
  } else {
    pageTheme = "dark";
  }
  setPageThemeToStorage();
  updatePagethemeHeading();
  updatePageThemeButtonText();
}

let pageThemeToggleButton = document.getElementById("pageThemeButton")
pageThemeToggleButton.addEventListener("click", togglePageTheme);
