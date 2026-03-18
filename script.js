let numero = 0

function aumentar() {
    numero = numero + 1
    document.getElementById("numero").innerText = numero
}

function diminuir() {
    numero = - 1 
    document.getElementById("numero").innerText = numero
}