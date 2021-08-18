const btn = document.querySelectorAll('button');
const current_span = document.querySelector('.current');
let arr = [];
let valueOne;
let valueTwo;
let index;
let operator;
let answer;

btn.forEach(button => {
    button.addEventListener('click', function () {
        let value = button.innerHTML;
        if (value === 'CLEAR') {
            arr.splice(0, arr.length);
            //alert('empty now');
            input(arr);
        }
        else {
            arr.push(value);
            input(arr);
        }

    });

});

function input(buttonPressed) {
    if (buttonPressed.length === 0) {
        //current_span.innerHTML = 0;
        clear();
    }
    else {

        for (let i = 0; i <= buttonPressed.length - 1; i++) {
            //if (buttonPressed[i] === '+' || buttonPressed[i] === '-' || buttonPressed[i] === 'x' || buttonPressed[i] === '÷') {
            if (buttonPressed[i] === '=') {
                valueTwo.replace('=', '');
                //var ret = "data-123".replace('data-','');

                // remove = from valuetwo
                //valueTwo    
                operate(valueOne, valueTwo, operator);
            }
            else if (isNaN(buttonPressed[i]) && buttonPressed[i] !== '=') {
                operator = buttonPressed[i];
                index = i;
            }
            valueOne = buttonPressed.slice(0, index).join('');
            valueTwo = buttonPressed.slice(index + 1, buttonPressed.length).join('');

        }
        //valueOne = buttonPressed.join('');
        current_span.innerHTML = buttonPressed.join('');

        //        operate(valueOne, valueTwo, operator);
        console.log('----------');
        console.log('indes' + index);
        console.log('operator' + operator);
        console.log(`button pressed ${buttonPressed}`);
        console.log(`value one ${valueOne}`);
        console.log(`value two ${valueTwo}`);
    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            sub(num1, num2);
            break;
        case 'x':
            multiply(num1, num2);
            break;
        case '÷':
            divide(num1, num2);
            break;
    }
    // no ouptut 
    // move expression to fullExpression and display answer in current
}
function clear() {
    current_span.innerHTML = 0;
}
function deleted() {
    //todo
}
function add(a, b) {
    answer = a + b
    return `answer ${answer}`;
}
function sub(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
