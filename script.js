function convert() {
    const input = document.getElementById('input').value;
    const binaryOutput = document.getElementById('binaryOutput');
    const decimalOutput = document.getElementById('decimalOutput');

    if (input === '') {
        binaryOutput.textContent = 'Binary equivalent: ';
        decimalOutput.textContent = 'Decimal equivalent: ';
        return;
    }

    if (input.match(/^[01]+$/)) {
        const decimalValue = parseInt(input, 2);
        decimalOutput.textContent = 'Decimal equivalent: ' + decimalValue;
    } else if (input.match(/^\d+$/)) {
        const binaryValue = (parseInt(input)).toString(2);
        binaryOutput.textContent = 'Binary equivalent: ' + binaryValue;
    } else {
        binaryOutput.textContent = 'Binary equivalent: Invalid input';
        decimalOutput.textContent = 'Decimal equivalent: Invalid input';
    }
}

const inputField = document.getElementById('input');
inputField.addEventListener('input', convert);
