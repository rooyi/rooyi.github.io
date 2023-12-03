function clearPeopleContainer() {
    const peopleContainer = document.getElementById('people-container');
    peopleContainer.innerHTML = '';
}

function createPersonElement(personIndex, hoursWorked) {
    const personContainer = document.getElementById('people-container');
    const personElement = document.createElement('div');
    personElement.classList.add('person');
    personElement.innerHTML = `
        <img src="person.png" alt="Person ${personIndex + 1}">
        <div class="hours-text">Hours Worked: ${hoursWorked}</div>
    `;
    personContainer.appendChild(personElement);
}

function calculateSalary() {
    clearPeopleContainer();

    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const bonusAmount = parseFloat(document.getElementById('bonusAmount').value) || 0;

    let totalSalary = 0;

    for (let i = 0; i < 5; i++) {
        const hoursWorked = generateRandomNumber(1, 10);
        totalSalary += hourlyRate * hoursWorked + bonusAmount;
        createPersonElement(i, hoursWorked);
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Expectation E[aX + b] = ${totalSalary.toFixed(2)}`;

    const hourlyRateDisplay = document.createElement('div');
    hourlyRateDisplay.textContent = `Hourly Rate: ${hourlyRate.toFixed(2)}`;
    resultElement.appendChild(hourlyRateDisplay);

    const bonusDisplay = document.createElement('div');
    bonusDisplay.textContent = `Bonus: ${bonusAmount.toFixed(2)}`;
    resultElement.appendChild(bonusDisplay);
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPersonElement(personIndex, hoursWorked) {
    const hoursSpan = document.getElementById(`hours${personIndex + 1}`);
    hoursSpan.textContent = hoursWorked;
}

function calculateSalary() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const bonusAmount = parseFloat(document.getElementById('bonusAmount').value) || 0;

    let totalSalary = 0;

    for (let i = 0; i < 10; i++) {
        const hoursWorked = generateRandomNumber(1, 10);
        totalSalary += hourlyRate * hoursWorked + bonusAmount;
        createPersonElement(i, hoursWorked);
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Expectation E[aX + b] = ${totalSalary.toFixed(2)}`;

    const hourlyRateDisplay = document.createElement('div');
    hourlyRateDisplay.textContent = `Hourly Rate: ${hourlyRate.toFixed(2)}`;
    resultElement.appendChild(hourlyRateDisplay);

    const bonusDisplay = document.createElement('div');
    bonusDisplay.textContent = `Bonus: ${bonusAmount.toFixed(2)}`;
    resultElement.appendChild(bonusDisplay);
}
