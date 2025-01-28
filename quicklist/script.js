const textField = document.getElementById("textField")
const button = document.getElementById("btn")
const form = document.querySelector("form")
const containerList = document.getElementById("container-list")
const warning = document.querySelector(".warning")
const spanWarning = document.querySelector(".warning span")
const closeWarning = document.querySelector(".close")
let id = 0

// Manipulando lista
form.onsubmit = (event) => {
  event.preventDefault()
  
  try {
    Item(textField.value)
    textField.value = ""
  } catch (error) {
    console.log(error)
    danger("Ouve um erro para adicionar o item")
  }
}

// Função para aparecer aviso
const danger = (content) => {
  spanWarning.textContent = content
  warning.classList.remove("warning-off")
}

// Evento para fechar aviso
closeWarning.addEventListener("click", (e) => {
  e.preventDefault()
  warning.classList.add("warning-off")
})

// Função para Criar e Remover item na lista
const Item = (item) => {
  //cria item
  id++
  const newli = document.createElement("li")
  newli.classList.add("guest")
  newli.id = id
  const containerCheckbox = document.createElement("div")
  containerCheckbox.classList.add("checkbox-wrapper")
  const checkboxImage = document.createElement("div")
  checkboxImage.classList.add("checkbox-image")
  const input = document.createElement("input")
  input.id = "item"
  input.setAttribute("type", "checkbox")
  input.setAttribute("name", "item")
  const label = document.createElement("label")
  label.classList.add("tx-paragraph")
  label.textContent = item
  label.setAttribute("for", "checkbox")
  const trash = document.createElement("div")
  trash.classList.add("trash")
  newli.append(containerCheckbox)
  containerCheckbox.append(checkboxImage, input, label)
  newli.append(trash)
  containerList.append(newli)
  
  //remove item
  trash.addEventListener("click", (e) => {
    e.preventDefault()
    if (input.checked) {
      newli.remove()
      danger("O item foi removido da lista")
    } else {
      danger("Selecione o item que vai remover da lista")
    }
  })
}
