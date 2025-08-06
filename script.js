let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

function appendNumber(value){
    currentInput += value
    display.textContent = currentInput
}

function appendOperator(operator){
    if  (currentInput === "" && operator !== ".") return
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate(){
    try {
        let result = eval(currentInput);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Resultado inválido");
        }

        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
        }

        currentInput = result.toString();
        display.textContent = currentInput;
    } catch(error){
        display.textContent = "Error";
        currentInput = "";
        console.error("Erro no cálculo:", error);
    }
}

function clearDisplay(){
    currentInput = "";
    display.textContent = currentInput;
}

function backspace() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput;
    }
}