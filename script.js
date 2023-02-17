let myLibrary = [

]

function Book(title, author, pages, read, indexOfCard) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.indexOfCard = indexOfCard
}

let createDiv = function() {
    let container = document.querySelector(".container")
    let div = document.createElement("div")


    div.classList.add("book-card")
    container.appendChild(div)
    

    for(let i = 0; i < 4; i++) {
        let p = document.createElement("p")
        div.appendChild(p)
    }

    for(let i = 0; i < 2; i++) {
        let button = document.createElement("button")
        button.classList.add("book-card-button")
        div.appendChild(button)
    }
    let buttons = document.querySelectorAll(".book-card-button")

    buttons[0].textContent = "Read"
    buttons[1].textContent = "Delete"
    
}

document.querySelector(".addNewBook").addEventListener("click", () => {
    let formDiv = document.querySelector(".form")

    if(formDiv.style.display === "grid") {
        formDiv.style.display = "none"
    } else {
        formDiv.style.display = "grid"
    }
})

let numOfCards = 0

document.querySelector("#submit").addEventListener("click", (e) => { 
    e.preventDefault();
    createDiv()
    
    let div = document.querySelector(".book-card:last-of-type")
    div.setAttribute("data-num", numOfCards)

    
    let paragraphs = document.querySelectorAll(".container .book-card:last-child p")
    let inputs = document.querySelectorAll(".form label input")
    let title = inputs[0].value
    let author = inputs[1].value
    let pages = inputs[2].value
    let read;   

    if (inputs[3].checked === true) {
        read = "Yes"
    } else  {
        read = "No"
    }

    myLibrary.push(new Book(title, author, pages, read, numOfCards))

    paragraphs[0].textContent = myLibrary[myLibrary.length - 1].title
    paragraphs[1].textContent = myLibrary[myLibrary.length - 1].author
    paragraphs[2].textContent = myLibrary[myLibrary.length - 1].pages
    paragraphs[3].textContent = myLibrary[myLibrary.length - 1].read

    numOfCards++
})
