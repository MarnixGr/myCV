function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;

    if (!binaryInput.match(/^[01]+$/)) {
        alert('Please enter a valid binary number (0s and 1s only).');
        return;
    }

    const decimalValue = parseInt(binaryInput, 2);
    document.getElementById('decimalOutput').textContent = 'Decimal equivalent: ' + decimalValue;
}
