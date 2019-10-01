const form = document.getElementById("conteudoConteiner")
const inputEvento = document.getElementById("inputTarefa")

form.addEventListener("submit", function(evento){

    evento.preventDefault()

    const div = document.createElement("div")
    form.appendChild(div)
    div.classList.add("print-div")

    const paragrafo = document.createElement("p")
    div.appendChild(paragrafo)
    paragrafo.classList.add("print-comentario")

    const span = document.createElement("span")
    div.appendChild(span)

    paragrafo.textContent = inputEvento.value

    form.reset()

})