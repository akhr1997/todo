const todo = document.querySelector("#todos")
const addbtn = document.querySelector("#add-button")
const container = document.querySelector(".container")

addbtn.addEventListener('click', () => {
    var paragraph = document.createElement('p')
    paragraph.innerText = todo.value;
    container.appendChild(paragraph)

    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick', () => {
        container.removeChild(paragraph)
    })
})