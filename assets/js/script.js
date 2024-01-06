const vegetables = {
    onion: {
        name: 'onion',
        bulbGap: 0.05,
        rowGap: 0.25,
        depth: 0.02,
        plantSeasons: ['March', 'April'],
        harvestSeasons: ['June', 'August']
    },
    garlic: {
        name: 'garlic',
        bulbGap: 0.15,
        rowGap: 0.3,
        depth: 0.025,
        plantSeasons: ['October', 'February'],
        harvestSeasons: ['June', 'August']
    },
    turnip: {
        name: 'turnip',
        bulbGap: 0.15,//
        rowGap: 0.3,//
        depth: 0.01,//
        plantSeasons: ['July', 'August'],//
        harvestSeasons: ['August', 'October']//
    },
    parsnip: {
        name: 'parsnip',
        bulbGap: 0.15,//
        rowGap: 0.3,//
        depth: 0.01,//
        plantSeasons: ['March', 'May'],//
        harvestSeasons: ['September', 'February']//
    }
}

// The Calculate button will execute a number of function to get relevant information for the user, hide the information section and show the results section.
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    //document.getElementById('information').setAttribute('style', 'display: none');
    document.getElementById('results').setAttribute('style', 'display: block');

    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    document.getElementById('area').innerText = calculateArea(length, width);

    // Assign the chosen vegetable's properties to useful variables.
    let vegetable = getVegetable();
    switch (vegetable) {
        case 'onion':
            rowGap = vegetables.onion.rowGap;
            bulbGap = vegetables.onion.bulbGap;
            depth = vegetables.onion.depth;
            plantSeasons = vegetables.onion.plantSeasons;
            harvestSeasons = vegetables.onion.harvestSeasons;
            break;
        case 'garlic':
            rowGap = vegetables.garlic.rowGap;
            bulbGap = vegetables.garlic.bulbGap;
            depth = vegetables.garlic.depth;
            plantSeasons = vegetables.garlic.plantSeasons;
            harvestSeasons = vegetables.garlic.harvestSeasons;
            break;
        case 'radish':
            rowGap = vegetables.radish.rowGap;
            bulbGap = vegetables.radish.bulbGap;
            depth = vegetables.radish.depth;
            plantSeasons = vegetables.radish.plantSeasons;
            harvestSeasons = vegetables.radish.harvestSeasons;
            break;
        case 'parsnip':
            rowGap = vegetables.parsnip.rowGap;
            bulbGap = vegetables.parsnip.bulbGap;
            depth = vegetables.parsnip.depth;
            plantSeasons = vegetables.parsnip.plantSeasons;
            harvestSeasons = vegetables.parsnip.harvestSeasons;
    }

    // Assign values to the spans in the results section based on the vegetable chosen by the user.
    document.getElementById('bulb-name').innerText = vegetable;
    let rows = calculateRows(width, rowGap);
    document.getElementById('rows').innerText = rows;

    let bulbsInARow = calculateBulbsInRow(length, bulbGap);
    document.getElementById('bulbs-in-row').innerText = bulbsInARow;

    bulbsOrSeeds(vegetable);

    // Takes the vegetable name string and capitalises the first letter only.
    document.getElementById('capitalised-name').innerText = vegetable[0].toUpperCase() + vegetable.slice(1);
    // Below assignments use * 100 to convert metres to centimetres.
    document.getElementsByClassName('bulb-gap')[0].innerText = bulbGap * 100;
    document.getElementsByClassName('bulb-gap')[1].innerText = bulbGap * 100;
    document.getElementsByClassName('bulb-depth')[0].innerText = depth * 100;
    document.getElementsByClassName('bulb-depth')[1].innerText = depth * 100;
    document.getElementsByClassName('row-gap')[0].innerText = rowGap * 100;
    document.getElementsByClassName('row-gap')[1].innerText = rowGap * 100;
    document.getElementById('total-bulbs').innerText = rows * bulbsInARow;
    document.getElementById('plant-seasons').innerText = plantSeasons[0] + " and " + plantSeasons[1];
    document.getElementById('harvest-seasons').innerText = harvestSeasons[0] + " and " + harvestSeasons[1];
})

document.getElementsByTagName('button')[1].addEventListener('click', function () {
    document.getElementById('information').setAttribute('style', 'display: block');
    //document.getElementById('results').setAttribute('style', 'display: none');
})

/**
 * Calculates the user's plantable area for their chosen vegetable bulbs.
 * @param {Number} length The vegetable bed length in metres.
 * @param {Number} width The vegetable bed width in metres.
 * @returns the area of the bed
 */
function calculateArea(length, width) {
    return Math.round(length * width * 100) / 100; //This limits the area displayed to a maximum of two decimal places.
}

/**
 * 
 * @returns the user's selected vegetable from the radio button list. 
 */
function getVegetable() {
    let radios = document.getElementsByTagName('input');
    for (radio of radios) {
        if (radio.checked) {
            return String(radio.id);
        } else {
            //validation check
        }
    }
}

/**
 * Calculates the maximum number of row possible for the width of the vegetable bed.
 * @param {Number} width The vegetable bed width in metres.
 * @param {Number} rowGap The recomended gap between rows of the specified bulb.
 * @returns the number of rows
 */
function calculateRows(width, rowGap) {
    return Math.floor(width / rowGap);
}

/**
 * Calculated the maximum number of bulbs plantable in a given row.
 * @param {Number} length The vegetable bed length in metres.
 * @param {Number} bulbGap The recommended gap between bulbs in the same row.
 * @returns the numbers of bulbs per row
 */
function calculateBulbsInRow(length, bulbGap) {
    return Math.floor(length / bulbGap);
}

/**
 * Assigns the value of various spans to be 'seeds' or 'bulbs' depending on the vegetable chosen.
 * @param {String} vegetable The user's chosen vegetable
 */
function bulbsOrSeeds(vegetable){
    let seeds = document.getElementsByClassName('seeds');
    if (vegetable === 'turnip' || vegetable === 'parsnip') {
        for (let i = 0; i < seeds.length; i++) {
            seeds[i].innerText = 'seeds';
            document.getElementById('seeds-or-bulbs').innerText = 'Seeds';
        } 
    } else {
        for (let i = 0; i < seeds.length; i++) {
            seeds[i].innerText = 'bulbs';
            document.getElementById('seeds-or-bulbs').innerText = 'Bulbs';
        }
    }
}
