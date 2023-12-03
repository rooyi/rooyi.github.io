function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPersonElement(personIndex, hoursWorked) {
    const personContainer = document.getElementById('people-container');
    const personElement = document.createElement('div');
    personElement.classList.add('person');
    personElement.innerHTML = `
        <img src="person.png" alt="Person ${personIndex + 1}">
        <div class="hours-text">Hours: <span>${hoursWorked}</span></div>
    `;
    personContainer.appendChild(personElement);
}

function clearPeopleContainer() {
    const personContainer = document.getElementById('people-container');
    personContainer.innerHTML = '';
}

function calculateSalary() {
    clearPeopleContainer();

    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const bonusAmount = parseFloat(document.getElementById('bonusAmount').value) || 0;

    let totalSalary = 0;
    let totalHours = 0;

    for (let i = 0; i < 5; i++) {
        const hoursWorked = generateRandomNumber(1, 10);
        totalHours += hoursWorked;
        const earnings = hourlyRate * hoursWorked + bonusAmount;
        totalSalary += earnings;
        createPersonElement(i, hoursWorked, earnings);
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    const expectationDisplay = document.createElement('div');
    expectationDisplay.textContent = `Expectation E[aX + b] = ${(totalSalary / 5).toFixed(2)}`;
    resultElement.appendChild(expectationDisplay);

    const hourlyRateDisplay = document.createElement('div');
    hourlyRateDisplay.textContent = `Hourly Rate: ${hourlyRate.toFixed(2)}`;
    resultElement.appendChild(hourlyRateDisplay);

    const bonusDisplay = document.createElement('div');
    bonusDisplay.textContent = `Bonus: ${bonusAmount.toFixed(2)}`;
    resultElement.appendChild(bonusDisplay);

    const totalHoursValue = document.getElementById('totalHoursValue');
    totalHoursValue.textContent = totalHours;

    const totalEarnings = totalSalary / 5;
    const totalEarningsDisplay = document.createElement('div');
    totalEarningsDisplay.textContent = `Total Earnings: ${totalEarnings.toFixed(2)}`;
    resultElement.appendChild(totalEarningsDisplay);
}

function createPersonElement(personIndex, hoursWorked, earnings) {
    const personContainer = document.getElementById('people-container');
    const personElement = document.createElement('div');
    personElement.classList.add('person');
    personElement.innerHTML = `
        <img src="person.png" alt="Person ${personIndex + 1}">
        <div class="hours-text">
            Hours: <span>${hoursWorked}</span><br>
            $: <span>${earnings.toFixed(2)}</span>
        </div>
    `;
    personContainer.appendChild(personElement);
}


