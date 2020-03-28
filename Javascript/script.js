var oneBttn = document.getElementById('calc-one');
var twoBttn = document.getElementById('calc-two');
var threeBttn = document.getElementById('calc-three');
var fourBttn = document.getElementById('calc-four');
var fiveBttn = document.getElementById('calc-five');
var sixBttn = document.getElementById('calc-six');
var sevenBttn = document.getElementById('calc-seven');
var eightBttn = document.getElementById('calc-eight');
var nineBttn = document.getElementById('calc-nine');
var zeroBttn = document.getElementById('calc-zero');

var decimalBttn = document.getElementById('calc-decimal');

var clearBttn = document.getElementById('calc-clear');

var backspaceBttn = document.getElementById('calc-backspace');

var displayValElement = document.getElementById('calc-display-area');

var displayVal = '0';
var pendingVal;
var evalStringArray = []; 

var calcNumButtons = document.getElementsByClassName('calc-bttn-num');
var calcOpertorButtons = document.getElementsByClassName('calc-bttn-operator');

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        
        case 'X':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            
            break; 
                                
        default:
            break;

    }
}

for (let i = 0; i < calcNumButtons.length; i++) {
    calcNumButtons[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOpertorButtons.length; i++) {
    calcOpertorButtons[i].addEventListener('click', performOperation, false);
}

clearBttn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

backspaceBttn.onclick = () => {
   let lengthofdisplayVal = displayVal.length;
   displayVal = displayVal.slice(0, lengthofdisplayVal - 1);

   if(displayVal === '')
        displayVal = '0';

   displayValElement.innerText = displayVal;
}

decimalBttn.onclick = () => {
   if(!displayVal.includes('.'))
        displayVal += '.'; 
     displayValElement.innerText = displayVal;
}

