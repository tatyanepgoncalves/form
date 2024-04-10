const btnDimiss = document.getElementById("dimiss-btn");
const btnSubs = document.getElementById("btn-subs");
const card = document.getElementById('card');
const cardModal = document.getElementById("card-modal");
const inputEmail = document.getElementById("input-email")
const erroWarm = document.getElementById("erro-warm");

// mensagem de erro 
inputEmail.addEventListener("input", function(event) {

    if(inputEmail === ""){
        erroWarm.style.display = "block";
        inputEmail.style.border = "hsl(4, 100%, 67%)";
    }
});






// mostrar card modal 
function showModal() {
    card.style.display = 'none';
    cardModal.style.display = 'flex';
}
  
// ocultar modal 
function hiddenModal(){
    cardModal.style.display = "hidden";
    card.style.display = "flex";
}