let generateInput = document.getElementById('generate-input')
let generateButton = document.getElementById('generate-button')
let calBody = document.getElementById('cal-body')
let calInput = document.getElementById('cal-input')
let cBtn = document.getElementById('c-btn')
let submitBtn = document.getElementById('submit-btn')
let errorNotice = document.getElementById('error-notice')
let correctNotice = document.getElementById('correct-notice')

generateButton.addEventListener('click',randomNumber)

function randomNumber(){
    let randomValue 
    randomValue = Math.round(Math.random() *10000)
    generateInput.value = randomValue
}
calBody.addEventListener('click',function(event){
    let finalCalInput 
   finalCalInput = event.target.innerText
   calInput.value =calInput.value + finalCalInput
   if(finalCalInput == cBtn.innerText){
       calInput.value = ''
       console.log('to do to')
   }
   
})
submitBtn.addEventListener('click',compare)

function compare(){
    if(generateInput.value === calInput.value){
        correctNotice.style.display = 'block'
        errorNotice.style.display = 'none'
    }else{
        errorNotice.style.display = 'block'
        correctNotice.style.display = 'none'
    }
}
