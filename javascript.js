// add
let addition = function(a, b) {
    let answer = a + b;
    // console.log(answer)
    number1 = answer;
    showAnswer(answer);
};
// subtract
let subtraction = function(a, b) {
    let answer = a - b;
    // console.log(answer)
    number1 = answer;
    showAnswer(answer);
};
// multiply
let multiplication = function(a, b) {
    let answer = a * b;
    // console.log(answer)
    number1 = answer;
    showAnswer(answer);
};
// divide
let division = function(a, b) {
    if (b !== 0) {
        let answer = a / b; 
        // console.log(answer)
        number1 = answer;
        showAnswer(answer);
    } else if (b == 0) {
        showAnswer("Error (Technically: infinity)")
    }
}

let operator = "";
let number1 = "";
let number2 = "";
let newNumber = false;
let opActive = false;
let opChange = false;
let eqActive = false;

let reset = function() {
    operator = "";
    number1 = "";
    number2 = "";
    newNumber = false;
    opActive = false;
    opChange = false;
    eqActive = false;
}

let test = function () {
    console.log(operator)
    console.log(number1)
    console.log(number2)
    console.log(newNumber)
    console.log(opActive)
    console.log(opChange)
    console.log(eqActive)
}

let updatecurrentdisplay = function (b) {
    const currentdisplay = document.querySelector(".currentdisplay");
    let current = currentdisplay.textContent;
    if (newNumber === true || current === "Error (technically: infinity)") {
        currentdisplay.textContent = b
        newNumber = false;
    } else {
        currentdisplay.textContent = current.concat(b)
    }
    opChange = false;
    eqActive = false;
}

let solve = function() {
    if (eqActive === false) {
        updateNum2();
    }
    operate(operator, number1, number2);
}

let equals = function() {
    if (operator !== "")
    solve();
    eqActive = true;
}

let updateOP = function(newop) {
    if (opChange === false) {
        if (opActive === true) {
            solve();
        } else {
            updateNum1();
        }
    }
    operator = newop;
    newNumber = true;
    opActive = true;
    opChange = true;
    eqActive = false;
}

let updateNum1 = function () {
    const currentdisplay = document.querySelector(".currentdisplay");
    number1 = Number(currentdisplay.textContent)
};
let updateNum2 = function () {
    const currentdisplay = document.querySelector(".currentdisplay");
    number2 = Number(currentdisplay.textContent)
};

let  showAnswer = function (apple) {
    const currentdisplay = document.querySelector(".currentdisplay");
    currentdisplay.textContent = apple;
    newNumber = false;

}

let cleardisplay = function() {
    const currentdisplay = document.querySelector(".currentdisplay");
    currentdisplay.textContent = "";
    reset();
}

let operate = function(newoperator, a, b) {
    if(newoperator == "add") {
        addition(a, b);
    } else if(newoperator == "subtract") {
        subtraction(a, b); 
    } else if(newoperator == "multiply") {
        multiplication(a, b);
    } else if(newoperator == "divide") {
        division(a, b);
    } else {
        alert("Error, something went wrong!!!");
    };
    opActive = false;

}