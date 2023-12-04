function calculateHoursWorked() {
    const totalHours = parseFloat(document.getElementById('totalHours').value) || 0;
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const bonusAmount = parseFloat(document.getElementById('bonusAmount').value) || 0;

    const expectationPerPerson = (hourlyRate + bonusAmount) * totalHours / 5;

    document.getElementById('expectedValueValue').textContent = expectationPerPerson.toFixed(2);
    document.getElementById('equationValue').textContent =
        `(${hourlyRate} + ${bonusAmount}) x ${totalHours} / 5 = ${expectationPerPerson.toFixed(2)}`;
}
