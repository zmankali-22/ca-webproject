

// Declare JS data that we cwant to store

let cssThemes = [

]

let pageTheme = "dark"


/**
 * Retrieve, assign and return the latest stored css theme  list from the browser localStorage
 * @returns Array of objects
 */
function getStoredCssTheme() {
    // update the csstheme array
    let rawJsonStringCssThemes = localStorage.getItem('cssThemes');
    cssThemes = JSON.parse(rawJsonStringCssThemes);
    //  return the update data
    return cssThemes
}

/**
 * Retrieve, assign and return the latest stored page theme from the browser localStorage
 * @returns String. Should be light or dark
 */

function getStoredPageTheme() {
    pageTheme = localStorage.getItem("pageTheme")
    return pageTheme
}



//  Create/update localstorage

function setCssThemeToStorage() {
    let dataAsJsonString = JSON.stringify(cssThemes)
    localStorage.setItem("cssThemes", dataAsJsonString)
}

function setPageThemeToStorage() {
    localStorage.setItem("pageTheme", pageTheme)
}


//  Delete localstorage