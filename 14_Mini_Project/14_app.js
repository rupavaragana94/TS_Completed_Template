var CalculatorApp = (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEvents();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector('#firstNumber');
        CalculatorApp.secondNumber = document.querySelector('#secondNumber');
        CalculatorApp.operatorButton = document.querySelector('#operator');
        CalculatorApp.equalsButton = document.querySelector('#equals-button');
        CalculatorApp.resultButton = document.querySelector('#result-button');
        CalculatorApp.plusButton = document.querySelector('#plus-button');
        CalculatorApp.minusButton = document.querySelector('#minus-button');
        CalculatorApp.divButton = document.querySelector('#divide-button');
        CalculatorApp.mulButton = document.querySelector('#multiply-button');
        CalculatorApp.clearButton = document.querySelector('#clear-button');
    };
    CalculatorApp.addEvents = function () {
        CalculatorApp.plusButton.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.divButton.addEventListener('click', CalculatorApp.changeOperatorDivision);
        CalculatorApp.mulButton.addEventListener('click', CalculatorApp.changeOperatorStar);
        CalculatorApp.equalsButton.addEventListener('click', CalculatorApp.calculate);
        CalculatorApp.clearButton.addEventListener('click', CalculatorApp.clear);
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operatorButton.innerHTML = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operatorButton.innerHTML = '-';
    };
    CalculatorApp.changeOperatorDivision = function () {
        CalculatorApp.operatorButton.innerHTML = '/';
    };
    CalculatorApp.changeOperatorStar = function () {
        CalculatorApp.operatorButton.innerHTML = '*';
    };
    CalculatorApp.calculate = function () {
        var num1 = parseFloat(CalculatorApp.firstNumber.value);
        var num2 = parseFloat(CalculatorApp.secondNumber.value);
        if (isNaN(num1) || isNaN(num2)) {
            CalculatorApp.resultButton.innerHTML = "RESULT";
        }
        else {
            var operator = CalculatorApp.operatorButton.innerHTML.trim();
            var result = 0;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.resultButton.innerHTML = result + "";
        }
    };
    CalculatorApp.clear = function () {
        CalculatorApp.firstNumber.value = "";
        CalculatorApp.secondNumber.value = "";
        CalculatorApp.operatorButton.innerHTML = '+';
        CalculatorApp.resultButton.innerHTML = "RESULT";
    };
    return CalculatorApp;
}());
var calc = new CalculatorApp();
