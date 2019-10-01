const form = document.getElementById("conteudoConteiner")
const inputEvento = document.getElementById("inputTarefa")
const erro = document.querySelector(".print-texto-erro")

form.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    const mensagemErro = document.createElement("p")
    form.appendChild(mensagemErro)
    mensagemErro.classList.add("print-texto-erro")g

    const div = document.createElement("div")
    form.appendChild(div)
    div.classList.add("print-div")

    const paragrafo = document.createElement("p")
    div.appendChild(paragrafo)
    paragrafo.classList.add("print-comentario")

    const span = document.createElement("span")
    div.appendChild(span)
    span.classList.add("print-span")
    span.textContent = "x"

    paragrafo.textContent = inputEvento.value

    form.reset()
    
    span.addEventListener("click", function(){
        div.classList.remove("print-div")
        div.classList.add("print-div__remove")
    })
})
