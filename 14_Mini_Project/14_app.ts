class CalculatorApp {

    private static  firstNumber : HTMLInputElement;
    private static secondNumber : HTMLInputElement;
    private static operatorButton : HTMLButtonElement;
    private static equalsButton : HTMLButtonElement;
    private static resultButton : HTMLButtonElement;
    private static plusButton : HTMLButtonElement;
    private static minusButton : HTMLButtonElement;
    private static divButton : HTMLButtonElement;
    private static mulButton : HTMLButtonElement;
    private static clearButton : HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEvents();
    }

    public static initialize(){
        CalculatorApp.firstNumber = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumber = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operatorButton = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equalsButton = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.resultButton = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plusButton = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButton = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.divButton = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.mulButton = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clearButton = document.querySelector('#clear-button') as HTMLButtonElement;
    }

    public static addEvents(){
        CalculatorApp.plusButton.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.divButton.addEventListener('click',CalculatorApp.changeOperatorDivision);
        CalculatorApp.mulButton.addEventListener('click',CalculatorApp.changeOperatorStar);
        CalculatorApp.equalsButton.addEventListener('click',CalculatorApp.calculate);
        CalculatorApp.clearButton.addEventListener('click',CalculatorApp.clear);
    }

    public static changeOperatorPlus(){
        CalculatorApp.operatorButton.innerHTML = '+';
    }
    public static changeOperatorMinus(){
        CalculatorApp.operatorButton.innerHTML = '-';
    }
    public static changeOperatorDivision(){
        CalculatorApp.operatorButton.innerHTML = '/';
    }
    public static changeOperatorStar(){
        CalculatorApp.operatorButton.innerHTML = '*';
    }
    public static calculate(){

        let num1:number = parseFloat(CalculatorApp.firstNumber.value);
        let num2:number = parseFloat(CalculatorApp.secondNumber.value);

        if(isNaN(num1) || isNaN(num2)){
           CalculatorApp.resultButton.innerHTML = "RESULT";
        }
        else{
           let operator = CalculatorApp.operatorButton.innerHTML.trim();
           let result = 0;
           switch(operator){
               case '+':
                   result = num1 + num2 ;
                   break;
               case '-':
                   result = num1 - num2 ;
                   break;
               case '/':
                   result = num1 / num2 ;
                   break;
               case '*':
                   result = num1 * num2 ;
                   break;
               default:
                   result = 0;
                   break;
           }
           CalculatorApp.resultButton.innerHTML = result + "";
       }
    }
    public static clear(){
        CalculatorApp.firstNumber.value = "";
        CalculatorApp.secondNumber.value = "";
        CalculatorApp.operatorButton.innerHTML = '+';
        CalculatorApp.resultButton.innerHTML = "RESULT";
    }
}

let calc = new CalculatorApp();