const btn = document.querySelectorAll('button');
const current_span = document.querySelector('.current');
const fullExpression_span = document.querySelector('.fullExpression');
let arr = [];
let valueOne;
let valueTwo;
let index;
let operator;
let answer;
let expression;

btn.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerHTML;
        if (value === 'CLEAR') {
            clear();
            input(arr);
        }
        else if (value === '=') {
            arr.push('');
            equalPressed(expression);
        }
        else {
            arr.push(value);
            input(arr);
        }
    });
});

function input(buttonPressed) {

    for (let i = 0; i <= buttonPressed.length - 1; i++) {

        if (isNaN(buttonPressed[i]) && buttonPressed[i] !== '=') {
            operator = buttonPressed[i];
            index = i;
        }
        current_span.innerHTML = buttonPressed.join('');
        valueOne = buttonPressed.slice(0, index).join('');
        valueTwo = buttonPressed.slice(index + 1, buttonPressed.length).join('');
        expression = `${valueOne} ${operator} ${valueTwo}`;

        //*****testing values*****
        // console.log('----------');
        // console.log('index' + index);
        // console.log('operator' + operator);
        // console.log(`button pressed ${buttonPressed}`);
        // console.log(`value one ${valueOne}`);
        // console.log(`value two ${valueTwo}`);
    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            let a = parseInt(num1);
            let b = parseInt(num2);
            add(a, b);
            return answer;
            break;
        case '-':
            sub(num1, num2);
            return answer;
            break;
        case 'x':
            multiply(num1, num2);
            return answer;
            break;
        case '÷':
            divide(num1, num2);
            return answer;
            break;
    }
}
function clear() {
    arr.splice(0, arr.length);
    current_span.innerHTML = 0;
    fullExpression_span.innerHTML = "";
    operator = null;
    index = null;
    console.log('used clear function');
}
function equalPressed(expression) {
    console.log('used equalPressed() function');
    fullExpression_span.innerHTML = expression;
    current_span.innerHTML = operate(valueOne, valueTwo, operator);

}
function deleted() {
    //todo
}
function add(a, b) {
    answer = a + b;
    return answer;
}
function sub(a, b) {
    answer = a - b;
    return answer;
}
function multiply(a, b) {
    answer = a * b;
    return answer;
}
function divide(a, b) {
    answer = a / b;
    return answer;
}