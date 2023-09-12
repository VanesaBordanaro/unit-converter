let num = 0
let type = document.getElementById("numb")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

function enterInput() {
    num = type.value;
    convertLength()
    convertVolume()
    convertMass()
}

function convertLength() {
    let meter = (num * 0.3048).toFixed(3)
    let feet = (num * 3.2808).toFixed(3)
    lengthResult.innerHTML= `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
}

function convertVolume() {
    let liter = (num * 3.78541).toFixed(3)
    let gallon = (num * 0.264172).toFixed(3)
    volumeResult.innerHTML = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`
}

function convertMass() {
    let kilograms = (num * 0.453592).toFixed(3)
    let pounds = (num * 2.20462).toFixed(3)
    return massResult.textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilograms} kilos`
}