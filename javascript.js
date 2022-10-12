// remember to put decimal accuracy solution in scratch file


let operator = "";
let number1 = "";
let number2 = "";
let newNumber = false;
// allows operators to solve and show answer to allow faster use 
let opActive = false;
// allows operator to be changed without solving if user clicks wrong one
let opChange = false;
// stops operators from saving answer as number2 after equals is used
let eqActive = false;
let deciFix = 1

let updateDisplay = function () {
    updatecurrentdisplay(this.textContent);
    newNumber = false;
    // alert(this.textContent)
    // let text = e.textContent;
    // alert(text);
}

let addDecimal = function () {
    const currentdisplay = document.querySelector(".currentdisplay");
    let current = currentdisplay.textContent;
    if (current.includes(".") === false || newNumber === true) {
        updatecurrentdisplay(this.textContent)
    }
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener('click', updateDisplay));
const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', addDecimal)


let deciCheck = function (a, b) {
    let num1 = a.toString()
    let num2 = b.toString()
    let deciPlaces1 = 0
    let deciPlaces2 = 0

    if (num1.includes(".")) {
        deciPlaces1 = (num1.split('.')[1]).length
    }
    if (num2.includes(".")) {
        deciPlaces2 = (num2.split('.')[1]).length
    }
    let maxDeci = (deciPlaces1 > deciPlaces2 ? deciPlaces1 : deciPlaces2)
    deciFix = (10 ** maxDeci)

    // console.log(num1)
    // console.log(deciPlaces1)
    // console.log(num2)
    // console.log(deciPlaces2)
    // console.log(maxDeci)
    // console.log(deciFix)
}
// add
let addition = function(a, b) {
    deciCheck(a, b)
    let answer = (((a * deciFix) + (b * deciFix)) / deciFix);
    // console.log(answer)
    number1 = answer;
    showAnswer(answer);
};
// subtract
let subtraction = function(a, b) {
    deciCheck(a, b)
    let answer = (((a * deciFix) - (b * deciFix)) / deciFix);
    // console.log(answer)
    number1 = answer;
    showAnswer(answer);
};
// multiply
let multiplication = function(a, b) {
    deciCheck(a, b)
    let answer = (((a * deciFix) * (b * deciFix)) / (deciFix * deciFix));
    // console.log(answer)
    number1 = answer;
    showAnswer(answer);
};
// divide
let division = function(a, b) {
    if (b !== 0) {
        deciCheck(a, b) 
        let answer = ((a * deciFix) / (b * deciFix)); 
        // console.log(answer)
        number1 = answer;
        showAnswer(answer);
    } else if (b == 0) {
        showAnswer("Error (Technically: infinity)")
    }
}


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
    // newNumber = false;

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
    newNumber = true;

}

// added newNumber true to operate to fix equals concat issue


