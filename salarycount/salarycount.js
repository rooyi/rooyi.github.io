function calculateHoursWorked() {
    const totalHours = parseFloat(document.getElementById('totalHours').value) || 0;
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const bonusAmount = parseFloat(document.getElementById('bonusAmount').value) || 0;

    const expectationPerPerson = (hourlyRate * totalHours / 5) + bonusAmount;

    document.getElementById('expectedValueValue').textContent = (totalHours / 5).toFixed(2);
    document.getElementById('equationValue').textContent =
        `${hourlyRate.toFixed(2)} x ${totalHours / 5} + ${bonusAmount.toFixed(2)} = ${expectationPerPerson.toFixed(2)}`;
}
