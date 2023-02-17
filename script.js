let myLibrary = [

]

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
myLibrary.push(new Book("a", "b", 45, "c"))

let createDiv = function() {
    let container = document.querySelector(".container")
    let div = document.createElement("div")
    div.classList.add("book-card")
    container.appendChild(div)
    for(let i = 0; i < 4; i++) {
        let p = document.createElement("p")
        div.appendChild(p)
    }
}

document.querySelector(".addButt").addEventListener("click", () => {
        let title = prompt("Title:")
        let author = prompt("Author:")
        let pages = prompt("Pages:")
        myLibrary.push(new Book(title, author, pages))
        createDiv()
        let paragraphs = document.querySelectorAll(".container .book-card:last-child p")
        paragraphs[0].textContent = myLibrary[myLibrary.length - 1].title
        paragraphs[1].textContent = myLibrary[myLibrary.length - 1].author
        paragraphs[2].textContent = myLibrary[myLibrary.length - 1].pages
})

document.querySelector(".toggle").addEventListener("click", () => {
    let formDiv = document.querySelector(".form")
    if(formDiv.style.display === "grid") {
        formDiv.style.display = "none"
    } else {
        formDiv.style.display = "grid"
    }
})

document.querySelector("#submit").addEventListener("click", (e) => { 
    e.preventDefault();  
    let inputs = document.querySelectorAll(".form label input")
    let title = inputs[0].value
    let author = inputs[1].value
    let pages = inputs[2].value
    myLibrary.push(new Book(title, author, pages))
    createDiv()
    let paragraphs = document.querySelectorAll(".container .book-card:last-child p")
    paragraphs[0].textContent = myLibrary[myLibrary.length - 1].title
    paragraphs[1].textContent = myLibrary[myLibrary.length - 1].author
    paragraphs[2].textContent = myLibrary[myLibrary.length - 1].pages
})



