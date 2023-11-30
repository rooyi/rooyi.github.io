document.addEventListener('DOMContentLoaded', function () {
  const diceNumberInput = document.getElementById('diceNumber');
  const diceValueDisplay = document.getElementById('diceValue');
  const diceContainer = document.getElementById('diceContainer');
  const individualExpectedValue = document.getElementById('individualExpectedValue');
  const totalExpectedValue = document.getElementById('totalExpectedValue');

  diceNumberInput.addEventListener('input', updateDiceNumber);

  function updateDiceNumber() {
    const numDice = diceNumberInput.value;
    diceValueDisplay.textContent = numDice;
    displayDice(numDice);
    calculateExpectedValue(numDice);
  }

  function displayDice(numDice) {
    diceContainer.innerHTML = '';

    for (let i = 1; i <= numDice; i++) {
      const diceImg = document.createElement('img');
      diceImg.src = dice_2.png; // IMAGE REPLACE?????
      diceContainer.appendChild(diceImg);
    }
  }

  function calculateExpectedValue(numDice) {
    const individualValue = 3.5; 
    const totalValue = numDice * individualValue;

    individualExpectedValue.textContent = `Individual Expected Value: ${individualValue}`;
    totalExpectedValue.textContent = `Total Expected Value: ${totalValue}`;
  }

  // Initial setup
  updateDiceNumber();
});
