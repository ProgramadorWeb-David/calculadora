

var operator = null;
var inputValueMemo = 0;


/* funcion para extraer a que boton el usuario hace click */ 
function getContentClick(event) {
   const value = event.target.innerHTML;
   
   filterAction(value);
}


/* funcion para filtrar a que funcion van a ir luego */
const filterAction = value => {
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(',') : null;
    // para los operadores
    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "*" ? setOperation('*') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('+/-') : null;
    // para el igual
    value === "=" ? calculation() : null;
    // para el reseteo
    value === "AC" ? resetCalculator() : null;
}


/* funcion para agregar número al input */
function addNumberInput(value) {
    const inputScreen =  document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value;

    if(inputValue === "0" && inputValue.length === 1 && value !== ','){
        inputScreen.value = value;
        return;
    }

    if(inputScreen.value === "" &&  value === ",") {
        inputScreen.value = 0 + value;
        return;
    }

    inputScreen.value = inputValue + value;
}


/* funcion para las operaciones */
function setOperation(operator) {
    const inputScreenValue = document.getElementsByClassName("calculator__screen")[0].value;
    this.operator = operator;

    if(inputScreenValue !== 0) {
        calculation(); 
    }
}


/* funcion para calcular */
function calculation() {
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    let valueOne = transformCommaToPoint(this.inputValueMemo);
    let valueTwo = transformCommaToPoint(inputScreen.value);
    // let total = 0;

    // para la suma
    if (this.operator === "+" && inputScreen.value !== "") {
        total = valueOne + valueTwo;
    } 
   

    // para la resta
    if(this.operator === "-" && inputScreen.value !== "") {
        if(valueOne !== 0) {
            total = valueOne - valueTwo;
        } else {
            total = valueTwo;
        }
    }


    // para la multiplicacion
    if(this.operator === "*" && inputScreen.value !== "") {
        if(valueOne !== 0) {
            total = valueOne * valueTwo;
        } else {
            total = valueTwo;
        }
    }


    // para la division
    if(this.operator === "/" && inputScreen.value !== "") {
        if(valueOne !== 0) {
            total = valueOne / valueTwo;
        } else {
            total = valueTwo;
        }
    }


    // para calcular porcentaje
    if(this.operator === "%" && inputScreen.value !== "") {
       total = valueTwo / 100;
    }


    // para pasar de positivo a negativo y viceversa
    if(this.operator === "+/-" && inputScreen.value !== "") {
       if(valueTwo > 0 ) {
           total = -valueTwo;
       } 
    }


    total = transformPointToComma(total);
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}


function resetCalculator() {
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    inputScreen.value = 0;
    // para setear el valor a cero
    this.inputValueMemo = 0;
    this.operator = null;
}


/* funcion para transformar string en números */
function transformCommaToPoint(value) {
    if(typeof value !== "number") {
        let resultTransform = value.replace(',', '.');
        return parseFloat(resultTransform);
    }

    return value;
}



/* funcion para pasar de un valor numerico a string */
function transformPointToComma(value) {
     let resultTransform = value.toString();
     resultTransform = resultTransform.replace('.', ',');
     return resultTransform;
}