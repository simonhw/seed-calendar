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

document.getElementsByName('vegetable-choice')[0].addEventListener('click', function(){
    console.log('you clicked button 0');
    setGreenBorder();
});
document.getElementsByName('vegetable-choice')[1].addEventListener('click', setGreenBorder);
document.getElementsByName('vegetable-choice')[2].addEventListener('click', setGreenBorder);
document.getElementsByName('vegetable-choice')[3].addEventListener('click', setGreenBorder);

// Calculate Button: Clicking will execute a number of function to get relevant information for the user, hide the information section and show the results section.
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let vegetable = checkVegetable();

    // Validation checking of input fields when button is clicked.
    if (length === '' || width === '') {
        alert('Please fill in the length and width of your vegetable bed. Minimum value of 1 metre.')
        return;
    } else if (length < 1 || width < 1) {
        alert('Your length and width values must be at least 1 metre.')
        return;
    } else if (vegetable === false) {
        alert('Please select a vegetable.')
        return;
    } else {
        document.getElementById('area').innerText = calculateArea(length, width);

        // Assign the chosen vegetable's properties to useful variables.
        getVegetableValues(vegetable);

        // Assign values to the spans in the results section based on the vegetable chosen by the user.
        document.getElementById('bulb-name').innerText = vegetable;
        let rows = calculateRows(width, rowGap);
        document.getElementById('rows').innerText = rows;

        let bulbsInARow = calculateBulbsInRow(length, bulbGap);
        document.getElementById('bulbs-in-row').innerText = bulbsInARow;

        bulbsOrSeeds(vegetable);

        // Takes the vegetable name string and capitalises the first letter only.
        document.getElementById('capitalised-name').innerText = titleCase(vegetable);
        // Below assignments use * 100 to convert metres to centimetres.
        document.getElementsByClassName('bulb-gap')[0].innerText = bulbGap;
        document.getElementsByClassName('bulb-gap')[1].innerText = bulbGap;
        document.getElementsByClassName('bulb-depth')[0].innerText = depth;
        document.getElementsByClassName('bulb-depth')[1].innerText = depth;
        document.getElementsByClassName('row-gap')[0].innerText = rowGap;
        document.getElementsByClassName('row-gap')[1].innerText = rowGap;
        document.getElementById('total-bulbs').innerText = rows * bulbsInARow;
        document.getElementById('plant-seasons').innerText = plantSeasons[0] + " and " + plantSeasons[1];
        document.getElementById('harvest-seasons').innerText = harvestSeasons[0] + " and " + harvestSeasons[1];
        // Changes the image based on the vegetable
        insertImage(vegetable);
        showResultsPage();
    }
})

//Clear Form Button: Allows user to clear form if they so wish.
document.getElementsByTagName('button')[1].addEventListener('click', function () {
    let inputs = document.getElementsByTagName('input');
    for (let input of inputs) {
        input.value = '';
        input.checked = false;
    }
    let ids = ['picker-onion', 'picker-garlic', 'picker-parsnip', 'picker-turnip'];
    for (let id of ids) {
        document.getElementById(id).removeAttribute('class', 'green-border');
    }
    console.log(convertM2ToCm2(10));
});

// Recalculate Button: Clicking will return the user to the first page.
document.getElementsByTagName('button')[2].addEventListener('click', showInformationPage)

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
 * This function takes in a value in metres and convert the number to centimetres.
 * @param {number} value 
 * @returns the input number multiplied by 100
 */
function convertMToCm(value) {
    return value * 100;
}

/**
 * Acts as a validation check for the vegetable radio buttons.
 * @returns the user's selected vegetable if selected, or a false value if not. 
 */
function checkVegetable() {
    let radios = document.getElementsByTagName('input');
    let checker = false;
    for (radio of radios) {
        if (radio.checked) {
            checker = true;
            return String(radio.id);
        }
    }
    return checker;
}

/**
 * Calculates the maximum number of row possible for the width of the vegetable bed.
 * @param {Number} width - The vegetable bed width in metres.
 * @param {Number} rowGap - The recommended gap in centimetres between rows of the specified bulb.
 * @returns the number of rows
 */
function calculateRows(width, rowGap) {
    return Math.floor(convertMToCm(width) / rowGap) < 1 ? 1 : Math.floor(convertMToCm(width) / rowGap);
}

/**
 * Calculated the maximum number of bulbs plantable in a given row.
 * @param {Number} length - The vegetable bed length in metres.
 * @param {Number} bulbGap - The recommended gap between bulbs in the same row.
 * @returns the numbers of bulbs per row
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
 * @param {String} vegetable 
 */
function insertImage(vegetable) {
    let src = String('assets/images/' + vegetable + '.webp');
    document.getElementById('vegetable-image').src = src;
    let alt = String('An image of a ' + vegetable);
    document.getElementById('vegetable-image').alt = alt;
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
 * This function adds an 's' to the end of a word change it to its plural form.
 * @param {string} word - String to which the letter 's' will be added. 
 * @returns the input string with an 's' added to the end
 */
function pluralise(word) {
    return word + 's';
}

/**
 * Function to assign the values of each vegetable object key to their useful variables
 * @param {String} key 
 */
function getVegetableValues(key) {
    rowGap = vegetables[key].rowGap;
    bulbGap = vegetables[key].bulbGap;
    depth = vegetables[key].depth;
    plantSeasons = vegetables[key].plantSeasons;
    harvestSeasons = vegetables[key].harvestSeasons;
}
 /**
  * This function hides the information section and displays the results section.
  */
function showResultsPage() {
    document.getElementById('information').setAttribute('style', 'display: none');
    document.getElementById('results').setAttribute('style', 'display: flex');
}

/**
 * This function hides the results section and displays the information section.
 */
function showInformationPage() {
    document.getElementById('information').removeAttribute('style', 'display: none');
    document.getElementById('results').setAttribute('style', 'display: none');
}

/**
 * This function loops through inputs and add a green border to the checked elements 
 * and removes it from any unchecked elements.
 */
function setGreenBorder(){
    let radios = document.getElementsByName('vegetable-choice');
    for (let radio of radios) {
        if (radio.checked) {
            radio.previousElementSibling.firstChild.setAttribute('class', 'green-border');
        } else {
            radio.previousElementSibling.firstChild.removeAttribute('class', 'green-border');
        }
    }
}
