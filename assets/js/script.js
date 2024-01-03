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
    console.log('user length is ' + length + ' metres.');
    width = document.getElementById('width').value;
    console.log('user width is ' + width + ' metres.');
    return length * width;
}

