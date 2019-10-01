const form = document.getElementById("conteudoConteiner")
const inputEvento = document.getElementById("inputTarefa")
const erro = document.querySelector(".print-texto-erro")

form.addEventListener("submit", function (evento) {

    evento.preventDefault()
    
    const mensagemErro = document.createElement("p")
    form.appendChild(mensagemErro)
    mensagemErro.classList.add("print-texto-erro")

    if (inputEvento.value.trim() === "") {
        inputEvento.setAttribute("placeholder", "Defina uma tarefa")
        inputEvento.classList.add("print-texto-erro")
    } else {
        inputEvento.classList.remove("print-texto-erro")        
        inputEvento.setAttribute("placeholder", "Nova tarefa")

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
        
        span.addEventListener("click", function () {
            div.classList.remove("print-div")
            div.classList.add("print-div__remove")
        })
        paragrafo.addEventListener("click", function(){
            
            if(paragrafo.classList.contains("print-comentario")){
                paragrafo.classList.remove("print-comentario")
                paragrafo.classList.add("print-comentario__concluido")
            }else{
                paragrafo.classList.add("print-comentario")
                paragrafo.classList.remove("print-comentario__concluido")
            }           
        })
    }
})
