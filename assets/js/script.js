let vegetables = {
    onion : {
        name: 'onion',
        bulbGap: 0.05,
        rowGap: 0.25,
        depth: 0.02,
        plantSeasons: ['March', 'April'],
        harvestSeasons: ['June', 'July', 'August']
    },
    garlic : {
        name: 'garlic',
        bulbGap: 0.15,
        rowGap: 0.3,
        depth: 0.025,
        plantSeasons: ['October', 'November', 'December', 'Januray', 'February'],
        harvestSeasons: ['June', 'July', 'August']
    },
    radish : {
        name: 'radish',
        bulbGap: 0.05,
        rowGap: 0.25,
        depth: 0.02,
        plantSeasons: ['March', 'April'],
        harvestSeasons: ['June', 'July', 'August']
    },
    parsnip : {
        name: 'parsnip',
        bulbGap: 0.05,
        rowGap: 0.25,
        depth: 0.02,
        plantSeasons: ['March', 'April'],
        harvestSeasons: ['June', 'July', 'August']
    },

}

// The Calculate button will execute the calculateArea function and direct the user to the seed-plan page.
document.getElementsByTagName('button')[0].addEventListener('click', function(){
    calculateArea();
})

/**
 * Calculates the user's plantable area for their chosen vegetable bulbs.
 * @param {Number} length The vegetable bed length in metres.
 * @param {Number} width The vegetable bed width in metres.
 */
function calculateArea(length, width) {
    length = document.getElementById('length').value;
    width = document.getElementById('width').value;
    document.getElementById('area').innerText = length * width;
}