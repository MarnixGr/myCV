function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalOutput = document.getElementById('decimalOutput');

    if (!binaryInput.match(/^[01]+$/)) {
        decimalOutput.textContent = 'Invalid binary input';
        return;
    }

    const decimalValue = parseInt(binaryInput, 2);
    decimalOutput.textContent = 'Decimal equivalent: ' + decimalValue;
}
