document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let studentName = document.getElementById('studentName').value;
    let studentId = document.getElementById('studentId').value;
    let amount = document.getElementById('amount').value;
    let cardNumber = document.getElementById('cardNumber').value;
    let expiryDate = document.getElementById('expiryDate').value;
    let cvv = document.getElementById('cvv').value;

    // Simple form validation
    if (!studentName || !studentId || !amount || !cardNumber || !expiryDate || !cvv) {
        displayMessage('All fields are required.');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        displayMessage('Invalid card number.');
        return;
    }

    if (!validateCVV(cvv)) {
        displayMessage('Invalid CVV.');
        return;
    }

    // Simulate payment processing
    displayMessage('Processing payment...', 'green');
    
    setTimeout(() => {
        displayMessage('Payment successful!', 'green');
    }, 2000);
});

function displayMessage(message, color = 'red') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}

function validateCardNumber(number) {
    // Simple validation for example purposes
    return number.length === 16 && !isNaN(number);
}

function validateCVV(cvv) {
    // Simple validation for example purposes
    return cvv.length === 3 && !isNaN(cvv);
}
