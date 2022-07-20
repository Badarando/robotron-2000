const robotron = document.querySelector("#robotron")
// const name = window.prompt("Qual seu nome ?")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) { 
    console.log(`Oi ${nome}, Bem vindo ao Robotrom 2000`)
}

dizOi('Marcos')