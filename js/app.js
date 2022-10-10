/*

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputText = document.getElementById('click-pin');
    if (isNaN(number)) {
        if (number == 'C') {
            inputText.value = '';
        }
    }
    else {
        const previousNumber = inputText.value;
        const newNumber = previousNumber + number;
        inputText.value = newNumber;
    }

});
function varyfayPin() {
    const pin = document.getElementById('display-pin').value;
    const clickPin = document.getElementById('click-pin').value;
    const notifySucces = document.getElementById('pin-success');
    const notifayError = document.getElementById('pint-error');
    if (pin == clickPin) {

        notifayError.style.display = 'none'
        notifySucces.style.display = 'block'

    }
    else {
        notifayError.style.display = 'block'
        notifySucces.style.display = 'none'

    }
}
*/

//==============Revition============//

function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getpin();
    }
}
function generatePin() {
    document.getElementById('display-pin').value = getpin();
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const clickPin = document.getElementById('click-pin');
    if (isNaN(number)) {
        if (number == 'C') {
            clickPin.value = '';
        }
    }
    else {
        const previousNumber = clickPin.value;
        const newNumber = previousNumber + number;
        clickPin.value = newNumber;
    }

});

function varyfayPin() {
    const displayPin = document.getElementById('display-pin').value;
    const clickPin = document.getElementById('click-pin').value;
    const pinSuccess = document.getElementById('pin-success');
    const pintError = document.getElementById('pint-error');

    if (displayPin == clickPin) {
        pinSuccess.style.display = 'block'
        pintError.style.display = 'none'
    }
    else {
        pintError.style.display = 'block'
        pinSuccess.style.display = 'none'
    }
}