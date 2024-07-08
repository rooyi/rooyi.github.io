document.addEventListener('DOMContentLoaded', function () {
    const diceSlider = document.getElementById('diceSlider');
    const diceCountDisplay = document.getElementById('diceCount');
    const diceContainer = document.getElementById('diceContainer');
    const resultContainer = document.getElementById('result');
    const calculateButton = document.getElementById('calculateButton');

    diceSlider.addEventListener('input', updateDiceCount);
    
    // Updated event listener for the button
    calculateButton.addEventListener('click', calculateExpectation);

    function updateDiceCount() {
        const count = diceSlider.value;
        diceCountDisplay.textContent = count;
        displayDice(count);
    }

    function displayDice(count) {
        diceContainer.innerHTML = '';

        for (let i = 0; i < count; i++) {
            const diceImage = document.createElement('img');
            diceImage.src = 'dice_gen.png';
            diceContainer.appendChild(diceImage);
        }
    }

    function calculateExpectation() {
        const count = diceSlider.value;

        // Calculate the expected value for individual dice
        const individualExpectation = (1 + 6) / 2; // Assuming a six-sided dice

        // Calculate the total expectation for all dice
        const totalExpectation = count * individualExpectation;

        // Display the results
        resultContainer.innerHTML = `
            <p>Expected value for each individual dice: ${individualExpectation}</p>
            <p>Total expected value for ${count} dice: ${totalExpectation}</p>
        `;
    }

    // Initial setup
    updateDiceCount();
});
