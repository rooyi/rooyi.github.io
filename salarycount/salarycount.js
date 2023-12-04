function calculateHoursWorked() {
    const totalHours = parseFloat(document.getElementById('totalHours').value) || 0;
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const bonusAmount = parseFloat(document.getElementById('bonusAmount').value) || 0;

    const expectedValue = hourlyRate * totalHours/5 + bonusAmount;

    document.getElementById('expectedValueValue').textContent = expectedValue.toFixed(2);
    document.getElementById('equationValue').textContent =
        `${hourlyRate} x ${totalHours} + ${bonusAmount} = ${expectedValue.toFixed(2)}`;
}
