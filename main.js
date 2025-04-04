let bill = 0 
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

//receber o valor da conta
let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()
}

//receber o numero de pessoas
let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input, receiveNumberOfPeople")

function receiveNumberOfPeople() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentage(value) {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    tipPercentage = value / 100
}

function receiveCustomTipPercentage() {
    let customTipInput = document.querySelector("#custom tip")
    console.log(customTipInput.valueAsNumber)

    buttonSelected.classList.remove("button-selected")
    buttonSelected.classList.add("button-selected")
    tipPercentage = value / 100

    let customTipInput = document.querySelector("#custom tip")
    tipPercentage
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("calcular")
    } else {
        console.log("ainda não é possível calcular")
    }
}