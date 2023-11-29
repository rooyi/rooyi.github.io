document.addEventListener('DOMContentLoaded', function () {
    // Get the slider, output, dice container, and result elements
    var slider = document.getElementById('mySlider');
    var output = document.getElementById('sliderValue');
    var diceContainer = document.getElementById('diceContainer');
    var resultElement = document.getElementById('result');
    var rollButton = document.getElementById('rollButton');

    // Update the current slider value (on page load)
    output.innerHTML = slider.value;

    // Update the current slider value (on slider change)
    slider.addEventListener('input', function () {
        output.innerHTML = this.value;
    });

    // Dice images
    var diceImages = ['dice_1.png', 'dice_2.png', 'dice_3.png', 'dice_4.png', 'dice_5.png', 'dice_6.png'];

    // Function to roll the dice and calculate the result
    function rollDice() {
        var sum = 0;

        // Clear previous dice
        diceContainer.innerHTML = '';

        // Roll each die
        for (var i = 0; i < 5; i++) {
            var randomFace = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
            var diceImage = diceImages[randomFace - 1];

            // Display the dice image
            var diceElement = document.createElement('img');
            diceElement.src = diceImage;
            diceElement.alt = 'Dice';
            diceElement.className = 'dice';
            diceContainer.appendChild(diceElement);

            // Add the face value to the sum
            sum += randomFace;
        }

        // Calculate the result by multiplying the sum with the slider value
        var result = parseFloat(sum) * parseFloat(slider.value);

        // Display the result
        resultElement.innerHTML = result;
    }

    // Add event listener to the roll button
    rollButton.addEventListener('click', rollDice);
});
