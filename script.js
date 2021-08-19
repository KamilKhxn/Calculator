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
            // arr.splice(0, arr.length);
            //alert('empty now');
            //console.log('used 1');
            clear();
            input(arr);
        }
        else if (value === '=') {
            arr.push('');
            console.log('used 3=');
            //operate(valueOne, valueTwo, operator);
            equalPressed(expression);
        }
        else {
            arr.push(value);
            input(arr);
        }
    });
});

function input(buttonPressed) {
    /* if (buttonPressed.length === 0) {
         // current_span.innerHTML = 0;
         clear();
         console.log('if worded');
         //clear();
     }*/
    // else {

    for (let i = 0; i <= buttonPressed.length - 1; i++) {
        //if (buttonPressed[i] === '+' || buttonPressed[i] === '-' || buttonPressed[i] === 'x' || buttonPressed[i] === '÷') {

        /*if (buttonPressed[i] === '=') {
            valueTwo.replace('=', '');
            //var ret = "data-123".replace('data-','');

            // remove = from valuetwo
            //valueTwo    
            operate(valueOne, valueTwo, operator);
        }*/

        /*else if (buttonPressed[i] === 'CLEAR') {
            clear();
        }*/

        if (isNaN(buttonPressed[i]) && buttonPressed[i] !== '=') {
            operator = buttonPressed[i];
            index = i;
        }
        current_span.innerHTML = buttonPressed.join('');
        valueOne = buttonPressed.slice(0, index).join('');
        valueTwo = buttonPressed.slice(index + 1, buttonPressed.length).join('');
        expression = `${valueOne}${operator}${valueTwo}`;
        //  }

        //valueOne = buttonPressed.join('');
        /*if (buttonPressed === '=') {
            operate(valueOne, valueTwo, operator);
        } */



        //        operate(valueOne, valueTwo, operator);
        console.log('----------');
        console.log('index' + index);
        console.log('operator' + operator);
        console.log(`button pressed ${buttonPressed}`);
        console.log(`value one ${valueOne}`);
        console.log(`value two ${valueTwo}`);
    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case ' + ':
            add(num1, num2);
            return answer;
            break;
        case ' - ':
            sub(num1, num2);
            return answer;
            break;
        case ' x ':
            multiply(num1, num2);
            return answer;
            break;
        case ' ÷ ':
            divide(num1, num2);
            return answer;
            break;
    }
    // no ouptut 
    // move expression to fullExpression and display answer in current
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
    //return console.log(`answer ${answer}`);
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
