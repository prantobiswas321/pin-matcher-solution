function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 pin', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const inputNumber = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            inputNumber.value = '';
        }
    }
    else {
        // const inputNumber = document.getElementById('typed-numbers');
        const prevNum = inputNumber.value;
        const newNum = prevNum + number;
        inputNumber.value = newNum;
    }
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin').value;
    const typedNum = document.getElementById('typed-numbers').value;
    const success = document.getElementById('success');
    const error = document.getElementById('error');

    if (displayPin == typedNum) {
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
});