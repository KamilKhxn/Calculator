// attributes
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

//saves text of button pressed into array
btn.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerHTML;
        if (value === 'CLEAR') {
            clear();
            input(arr);
        }
        else if (value === '=') {
            //pushes an empty value - the equal button doesnt show on the screen
            arr.push('');
            equalPressed(expression);
        }
        else {
            arr.push(value);
            input(arr);
        }
    });
});

//finds the index of the operator and splits the array into two parts
//before operator - valueOne
//after operator - valueTwo

function input(buttonPressed) {

    for (let i = 0; i <= buttonPressed.length - 1; i++) {
        if (isNaN(buttonPressed[i]) && buttonPressed[i] !== '=') {
            operator = buttonPressed[i];
            index = i;
        }
        //displays buttons pressed onto 'screen;
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
            add(parseInt(num1), parseInt(num2));
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
//clears array values and values displayed on window
function clear() {
    arr.splice(0, arr.length);
    current_span.innerHTML = 0;
    fullExpression_span.innerHTML = "";
    operator = null;
    index = null;
}
//adds expression to top of screen and displays answer to the bottom
function equalPressed(expression) {
    fullExpression_span.innerHTML = expression;
    current_span.innerHTML = operate(valueOne, valueTwo, operator);
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