const btn = document.getElementById("button")
const newPass = document.getElementById("newPass")
const slider = document.getElementById("range")
const rangeVal = document.getElementById("rangeVal")
rangeVal.innerText = slider.value

const upperCase = document.getElementById("capLet")
const lowerCase = document.getElementById("smallLet")
const number = document.getElementById("number")
const symbol = document.getElementById("symbol")

const copy = document.getElementById('copyBtn')

slider.addEventListener('input', (e) =>{
    rangeVal.innerText = e.target.value
})

btn.addEventListener('click',() =>{
    
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let symbols = '@#$^&!'

    let finalStr = ""
    let latestPass= ""

    if(upperCase.checked){
        finalStr += capitalLetter
    }
    if(lowerCase.checked){
        finalStr += smallLetter
    }
    if(number.checked){
        finalStr += numbers
    }
    if(symbol.checked){
        finalStr += symbols
    }

    if(finalStr === ''){
        alert("Please Select atleast one field")
    }
    
    for(let i = 0;i<slider.value;i++){
        let randNum = Math.floor(Math.random()*finalStr.length)
        latestPass += finalStr.charAt(randNum)
    }

    newPass.innerText = `${latestPass}`
})

copyBtn.addEventListener('click', () => {
    window.navigator.clipboard.writeText(newPass.innerText)
})