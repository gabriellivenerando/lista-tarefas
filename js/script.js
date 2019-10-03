const form = document.getElementById("conteudoConteiner")
const inputEvento = document.getElementById("inputTarefa")
const erro = document.querySelector(".print-texto-erro")
const btnApaga = document.getElementById("btnApaga")
const btnFeito = document.getElementById("btnFeito")
const divDrag = document.getElementById("drag")


form.addEventListener("submit", function(evento){
    evento.preventDefault()

    if (inputEvento.value.trim() === ""){
        inputEvento.setAttribute("placeholder", "Defina uma tarefa")
        inputEvento.classList.add("print-texto-erro")
    } else {
        inputEvento.classList.remove("print-texto-erro")        
        inputEvento.setAttribute("placeholder", "Nova tarefa")

        const div = document.createElement("div")
        div.classList.add("print-div")
        drag.className = "print-drag"
        drag.appendChild(div)
        
        const paragrafo = document.createElement("p")
        div.appendChild(paragrafo)
        paragrafo.classList.add("print-comentario")

        let valorEtiqueta = document.getElementById("etiqueta")
        let paragrafoEtiqueta = document.createElement("p")
        div.appendChild(paragrafoEtiqueta)
        paragrafoEtiqueta.textContent = valorEtiqueta.value
        paragrafoEtiqueta.classList.add("etiquetas")

        const divEditar = document.createElement("div")
        divEditar.classList.add("editar-tarefa__div")
        div.appendChild(divEditar)
        
        const editarTarefa = document.createElement("p")
        editarTarefa.classList.add("editar-tarefa__p")
        divEditar.appendChild(editarTarefa)
        editarTarefa.textContent = "editar"

        const span = document.createElement("span")
        divEditar.appendChild(span)
        span.classList.add("print-span")
        span.textContent = "x"

        paragrafo.textContent = inputEvento.value

        form.reset()
        
        span.addEventListener("click", function(){
            div.classList.remove("print-div")
            div.classList.add("print-div__remove")
        })

        paragrafo.addEventListener("click", function(){            
            if(paragrafo.classList.contains("print-comentario")){
                paragrafo.classList.remove("print-comentario")
                paragrafo.classList.add("print-comentario__concluido")
            } else{
                paragrafo.classList.add("print-comentario")
                paragrafo.classList.remove("print-comentario__concluido")
            }           
        })

        btnFeito.addEventListener("click", function(){
            if(btnFeito){
                paragrafo.classList.remove("print-comentario")
                paragrafo.classList.add("print-comentario__concluido")
            }
        })

        btnApaga.addEventListener("click", function(){
            if(btnApaga){
                div.classList.add("print-div__remove")
            } 
        })   

        editarTarefa.addEventListener("dblclick", function(){
            paragrafo.setAttribute("contentEditable", "true")
        })
        
        // FUNÇÃO PARA ADICIONAR O EDITAR
        // editarTarefa.addEventListener("click", function(){
        //     if(editarTarefa){
        //     paragrafo.classList.remove("print-comentario")
        //     paragrafo.classList.add("print-comentario__remove")
        //     span.classList.remove("print-span")
        //     span.classList.add("print-span__remove")
        //     editarTarefa.classList.remove("editar-tarefa__p")
        //     editarTarefa.classList.add("editar-tarefa__p-remove")
            
        //     const editarInput = document.createElement("input")
        //     editarInput.setAttribute("type", "text")
        //     editarInput.classList.add("editar-tarefa__input")
        //     div.appendChild(editarInput)

        //     paragrafo.textContent = editarInput.value
        //     paragrafo.classList.add("print-comentario")
        //     } 
        // })
    }
})
