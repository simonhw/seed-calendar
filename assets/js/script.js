const vegetables = {
    onion: {
        name: 'onion',
        bulbGap: 5,
        rowGap: 25,
        depth: 2,
        plantSeasons: ['March', 'April'],
        harvestSeasons: ['June', 'August'],
        src: 'assets/images/onion.webp',
        alt: 'An image of a brown onion in a bowl.'
    },
    garlic: {
        name: 'garlic',
        bulbGap: 15,
        rowGap: 30,
        depth: 2.5,
        plantSeasons: ['October', 'February'],
        harvestSeasons: ['June', 'August'],
        src: 'assets/images/garlic.webp',
        alt: 'An image of a head of garlic on a table.'
    },
    turnip: {
        name: 'turnip',
        bulbGap: 15,
        rowGap: 30,
        depth: 1,
        plantSeasons: ['July', 'August'],
        harvestSeasons: ['August', 'October'],
        src: 'assets/images/turnip.webp',
        alt: 'An image of turnips in a pile.'
    },
    parsnip: {
        name: 'parsnip',
        bulbGap: 15,
        rowGap: 30,
        depth: 1,
        plantSeasons: ['March', 'May'],
        harvestSeasons: ['September', 'February'],
        src: 'assets/images/parsnip.webp',
        alt: 'An image of a stack of parsnips.'
    }
};

// Add event listeners to the vegetable picker images to indicate which one is checked.
for (let i = 0; i < 4; i++) {
    document.getElementsByName('vegetable-choice')[i].addEventListener('click', setGreenBorder);
}

// Calculate Button: Clicking will execute several functions to get relevant information for the user, hide the information section and show the results section.
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let vegetable = checkVegetable();

    // Validation checking of input fields when the button is clicked.
    if (!validationCheck(length, width, vegetable)) {
        return;
    } else {
        insertAreaValues(length, width);
        insertVegetableNames(vegetable);
        insertRowDetails(length, width, vegetable);  
        bulbsOrSeeds(vegetable);
        insertVegetableProperties(vegetable);
        insertImage(vegetable);
        showResultsPage();
    }
});

//Clear Form Button: Allows user to clear the input fields if they so wish.
document.getElementsByTagName('button')[1].addEventListener('click', function () {
    clearSizeInputs();
    clearRadioButtons();
});

// Recalculate Button: Clicking will return the user to the first 'page'.
document.getElementsByTagName('button')[2].addEventListener('click', showInformationPage);

/**
 * Calculates the user's plantable area for their chosen vegetable bulbs. To limit the result 
 * to two decimal places, the value is multiplied by 100 before being rounded to a whole number
 * and then being divided by 100.
 * @param {Number} length - The vegetable bed length in metres.
 * @param {Number} width - The vegetable bed width in metres.
 * @returns the area of the bed
 */
function calculateArea(length, width) {
    return Math.round(length * width * 100) / 100;
}

/**
 * Function that clears the text inputs fields in the Information section.
 */
function clearSizeInputs() {
    let inputs = document.getElementsByName('size-input');
    for (let input of inputs) {
        input.value = '';
    }
}

/**
 * Function that unchecks all radio buttons and removes any green borders.
 */
function clearRadioButtons() {
    let ids = ['picker-onion', 'picker-garlic', 'picker-parsnip', 'picker-turnip'];
    for (let id of ids) {
        document.getElementById(id).removeAttribute('class', 'green-border');
        id.checked = false;
    }
}

/**
 * This function takes in a value in metres and converts the number to centimetres.
 * @param {number} value 
 * @returns the input number multiplied by 100
 */
function convertMToCm(value) {
    return value * 100;
}

/**
 * Returns the id of the chosen vegetable and/or also acts as a helper for the radio buttons validation check.
 * @returns the user's selected vegetable if selected, or a false value if not. 
 */
function checkVegetable() {
    let radios = document.getElementsByTagName('input');
    let checker = false;
    for (let radio of radios) {
        if (radio.checked) {
            checker = true;
            return String(radio.id);
        }
    }
    return checker;
}

/**
 * Calculates the maximum number of rows possible for the width of the vegetable bed.
 * @param {Number} width - The vegetable bed width in metres.
 * @param {Number} rowGap - The recommended gap in centimetres between rows of the specified bulb.
 * @returns the number of rows
 */
function calculateRows(width, rowGap) {
    return Math.floor(convertMToCm(width) / rowGap) < 1 ? 1 : Math.floor(convertMToCm(width) / rowGap);
}

/**
 * Calculates the maximum number of bulbs plantable in a given row.
 * @param {Number} length - The vegetable bed length in metres.
 * @param {Number} bulbGap - The recommended gap between bulbs in the same row.
 * @returns the number of bulbs per row
 */
function calculateBulbsInRow(length, bulbGap) {
    return Math.floor(convertMToCm(length) / bulbGap);
}

/**
 * Assigns the value of various spans to be 'seeds' or 'bulbs' depending on the vegetable chosen.
 * @param {String} vegetable - The user's chosen vegetable
 */
function bulbsOrSeeds(vegetable) {
    let seeds = document.getElementsByClassName('seeds');
    let string = 'bulb';
    if (vegetable === 'turnip' || vegetable === 'parsnip') {
        string = 'seed';
    }
    for (let i = 0; i < seeds.length; i++) {
        seeds[i].innerText = pluralise(string);
    }
    document.getElementById('spacing').innerText = titleCase(string);
    document.getElementById('depth').innerText = titleCase(string);
    document.getElementById('seeds-or-bulbs').innerText = pluralise(titleCase(string));
}

/**
 * Updates the image src link and alt text based on the vegetable chosen.
 * @param {String} key - The object key to look up.
 */
function insertImage(key) {
    document.getElementById('vegetable-image').src = vegetables[key].src;
    document.getElementById('vegetable-image').alt = vegetables[key].alt;
}

/**
 * Takes in a string and returns it with the first letter capitalised.
 * @param {string} word 
 * @returns string 
 */
function titleCase(word) {
    return word[0].toUpperCase() + word.slice(1);
}

/**
 * This function adds an 's' to the end of a word to change it to its plural form.
 * @param {string} word - String to which the letter 's' will be added. 
 * @returns the input string with an 's' added to the end
 */
function pluralise(word) {
    return word + 's';
}

/**
 * This function hides the information section and displays the results section.
 */
function showResultsPage() {
    document.getElementById('information').setAttribute('style', 'display: none');
    document.getElementById('results').setAttribute('style', 'display: flex');
    window.scrollTo(0,0);
}

/**
 * This function hides the results section and displays the information section.
 */
function showInformationPage() {
    document.getElementById('information').removeAttribute('style', 'display: none');
    document.getElementById('results').setAttribute('style', 'display: none');
    window.scrollTo(0,0);
}

/**
 * This function loops through inputs and adds a green border to the checked elements 
 * and removes it from any unchecked elements.
 */
function setGreenBorder() {
    let radios = document.getElementsByName('vegetable-choice');
    for (let radio of radios) {
        if (radio.checked) {
            radio.previousElementSibling.firstChild.setAttribute('class', 'green-border');
        } else {
            radio.previousElementSibling.firstChild.removeAttribute('class', 'green-border');
        }
    }
}

/**
 * This function validates the input fields ensuring that dimensions added by the user 
 * are between 1 and 20 metres, and a vegetable radio button has been checked.
 * @param {number} length 
 * @param {number} width 
 * @param {string} vegetable 
 * @returns boolean and/or an alert window.
 */
function validationCheck(length, width, vegetable) {
    if (length === '' || width === '') {
        alert('Please fill in the length and width of your vegetable bed with a minimum value of 1 metre and a maximum value of 20 metres. Please also select a vegetable.');
        return false;
    } else if (length < 1 || width < 1 || length > 20 || width > 20) {
        alert('Your length and width values must be at least 1 metre and at most 20 metres.');
        clearSizeInputs();
        return false;
    } else if (vegetable === false) {
        alert('Please select a vegetable.');
        return false;
    } else {
        return true;
    }
}

/**
 * Function that inserts all relevant properties of the user's chosen vegetable
 * into the appropriate spans in the HTML body.
 * @param {String} key - The object key to look up. 
 */
function insertVegetableProperties(key){
    let variableNames = ['bulbGap', 'depth', 'rowGap'];
    let classNames = ['bulb-gap', 'bulb-depth', 'row-gap'];
    for (let i = 0; i < variableNames.length; i++){
        let elements = document.getElementsByClassName(classNames[i]);
        for (let j = 0; j < elements.length; j++){
            elements[j].innerText = vegetables[key][variableNames[i]];
        }
    }
    document.getElementById('plant-seasons').innerText = vegetables[key].plantSeasons[0] + " and " + vegetables[key].plantSeasons[1];
    document.getElementById('harvest-seasons').innerText = vegetables[key].harvestSeasons[0] + " and " + vegetables[key].harvestSeasons[1];  
}
 /**
  * This function will insert the calculated value of the area of the 
  * user's vegetable bed into all spans with a class of "area".
  * @param {Number} length - The length of the user's vegetable bed
  * @param {Number} width - The width of the user's vegetable bed
  */
function insertAreaValues(length, width){
    let areas = document.getElementsByClassName('area');
    for (let i = 0; i < areas.length; i++){
        areas[i].innerText = calculateArea(length, width);
    }
}

/**
 * This function will insert the name of the vegetable chosen into any
 * span with a class of "bulb-name" and a capitalised version into any
 * span with a class of "capitalised-name".
 * @param {String} vegetable - The user's chosen vegetable.
 */
function insertVegetableNames(vegetable){
    let names = document.getElementsByClassName('bulb-name');
    for (let i = 0; i < names.length; i++){
        names[i].innerText = vegetable;
    }
    let capitalisedNames = document.getElementsByClassName('capitalised-name');
    for (let i = 0; i < capitalisedNames.length; i++){
        capitalisedNames[i].innerText = titleCase(vegetable);
    }
}

/**
 * A function to insert the number of rows of vegetables and the total number
 * of bulbs or seeds required into the HTML elements.
 * @param {Number} length - The length of the user's vegetable bed
 * @param {Number} width - The width of the user's vegetable bed
 * @param {String} key - The object key to look up.
 */
function insertRowDetails(length, width, key){
    let rows = calculateRows(width, vegetables[key].rowGap);
    document.getElementById('rows').innerText = rows;
    let bulbsInARow = calculateBulbsInRow(length, vegetables[key].bulbGap);
    document.getElementById('bulbs-in-row').innerText = bulbsInARow;
    document.getElementById('total-bulbs').innerText = rows * bulbsInARow;
}