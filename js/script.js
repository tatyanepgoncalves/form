const btnDimiss = document.getElementById("dimiss-btn");
const btnSubs = document.getElementById("btn-subs");

const card = document.getElementById('card');
const cardModal = document.getElementById("card-modal");
const inputEmail = document.getElementById("input-email")
const erroWarm = document.getElementById("erro-warm");
const signedEmail = document.getElementById('signed-email');
const form = document.getElementById('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault()
})

// Validação de formulário
function checkInput(){

    if (inputEmail.value === ''){
        erroWarm.innerText = "Valid email required"
        erroWarm.style.display = 'block'

    } else if (!inputEmail.value.includes('@')){
        erroWarm.innerText = "Email is invalid"
        erroWarm.style.display = 'block'
        
    } else if (inputEmail.value.length < 3){
        erroWarm.innerText = "Email is too short"
        erroWarm.style.display = 'block'

    } else {
        showModal()
    }
}

// 
btnSubs.addEventListener('click', checkInput)


// ocultar o modal
btnDimiss.addEventListener('click', hiddenModal)

// mostrar card modal 
function showModal() {
    signedEmail.innerText = inputEmail.value

    card.style.display = 'none';
    cardModal.style.display = 'flex';
}
  
// ocultar modal 
function hiddenModal(){
    cardModal.style.display = "none";
    card.style.display = "flex";  
    clearInput() 
}

// limpar input
function clearInput(){
    inputEmail.value = ''
}