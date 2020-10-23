//Qual botão clicar?
document.querySelector("#add-time")
//Quando clicar, o que acontece?
.addEventListener("click", cloneField) //criei a função cloneFIeld

function cloneField() {
    //Qual campo clonar? (criei variável)
    const newFields = document.querySelector(".schedule-item").cloneNode(true)
    //limpar os campos
    const fields = newFields.querySelectorAll("input")
    fields.forEach(function(field) {
        field.value = ""
    })

    //Colocar na página
    document.querySelector("#schedule-items").appendChild(newFields)
}


