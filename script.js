let myLibrary = [];
let deleteButtons;

/* function Book(title, author, pages, read, indexOfCard) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.indexOfCard = indexOfCard
} */

class Book {
  constructor(title, author, pages, read, indexOfCard) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read),
      (this.indexOfCard = indexOfCard);
  }
}

/* const formValidation = {

}
 */
function getDeleteButtons() {
  deleteButtons = document.querySelectorAll(".delete");
}

let createDiv = function () {
  let container = document.querySelector(".container");
  let div = document.createElement("div");

  div.classList.add("book-card");
  container.appendChild(div);

  for (let i = 0; i < 4; i++) {
    let p = document.createElement("p");
    div.appendChild(p);
  }

  for (let i = 0; i < 2; i++) {
    let button = document.createElement("button");
    button.classList.add("book-card-button");
    div.appendChild(button);
  }
};

document.querySelector(".addNewBook").addEventListener("click", () => {
  let formDiv = document.querySelector(".form-div");

  if (formDiv.style.display === "grid") {
    formDiv.style.display = "none";
  } else {
    formDiv.style.display = "grid";
  }

  document.querySelector(".form-close").onclick = () => {
    let formDiv = document.querySelector(".form-div");

    if (formDiv.style.display === "grid") {
      formDiv.style.display = "none";
    } else {
      formDiv.style.display = "grid";
    }
  };
});

document.querySelector("#submit").addEventListener("click", (e) => {
  const form = document.querySelector(".form");
  let inputs = document.querySelectorAll(".form label input");

  let title = inputs[0].value;
  let author = inputs[1].value;
  let pages = inputs[2].value;
  let read;

  if (inputs[3].checked === true) {
    read = "Yes";
  } else {
    read = "No";
  }

  if (form.checkValidity() === true) {
    e.preventDefault();
    createDiv();

    let paragraphs = document.querySelectorAll(
      ".container .book-card:last-child p"
    );

    myLibrary.push(new Book(title, author, pages, read));
    myLibrary[myLibrary.length - 1].index = myLibrary.length - 1;

    let readButton = document.querySelector(
      ".book-card:last-of-type .book-card-button:first-of-type"
    );
    readButton.classList.add("read");
    readButton.setAttribute("data-num", myLibrary.length - 1);

    let deleteButton = document.querySelector(
      ".book-card:last-of-type .book-card-button:last-of-type"
    );
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-num", myLibrary.length - 1);

    let div = document.querySelector(".book-card:last-of-type");
    div.setAttribute("data-num", myLibrary.length - 1);
    div.setAttribute("data-read", myLibrary[myLibrary.length - 1].read);

    paragraphs[0].textContent = myLibrary[myLibrary.length - 1].title;
    paragraphs[1].textContent = myLibrary[myLibrary.length - 1].author;
    paragraphs[2].textContent = myLibrary[myLibrary.length - 1].pages;
    paragraphs[3].textContent = myLibrary[myLibrary.length - 1].read;

    if (paragraphs[3].textContent === "Yes") {
      paragraphs[3].style.color = "#2C5530";
    } else {
      paragraphs[3].style.color = "#DD1C1A";
    }

    getDeleteButtons();

    deleteButtons.forEach((button) => {
      button.onclick = () => {
        let cards = document.querySelectorAll(".book-card");
        let delButtons = document.querySelectorAll(".delete");
        let readButtons = document.querySelectorAll(".read");
        for (let i = 0; i < cards.length; i++) {
          if (
            button.getAttribute("data-num") ===
            cards[i].getAttribute("data-num")
          ) {
            cards[i].remove();
            myLibrary.splice(i, 1);

            cards = document.querySelectorAll(".book-card");
            for (let j = 0; j < cards.length; j++) {
              cards = document.querySelectorAll(".book-card");
              delButtons = document.querySelectorAll(".delete");
              readButtons = document.querySelectorAll(".read");
              cards[j].setAttribute("data-num", j);
              delButtons[j].setAttribute("data-num", j);
              readButtons[j].setAttribute("data-num", j);
            }
          }
        }
      };
    });

    let readButtons = document.querySelectorAll(".read");

    readButtons.forEach((button) => {
      button.onclick = () => {
        let cards = Array.from(document.querySelectorAll(".book-card"));
        let readPara = Array.from(
          document.querySelectorAll(".book-card p:nth-of-type(4)")
        );
        for (let i = 0; i < myLibrary.length; i++) {
          if (
            button.getAttribute("data-num") ===
            cards[i].getAttribute("data-num")
          ) {
            if (myLibrary[i].read === "Yes") {
              myLibrary[i].read = "No";
              if (cards.indexOf(cards[i] === readPara.indexOf(readPara[i]))) {
                readPara[i].textContent = "No";
                readPara[i].style.color = "#DD1C1A";
              }
            } else {
              myLibrary[i].read = "Yes";
              cards[i].setAttribute("data-read", "Yes");
              if (cards.indexOf(cards[i] === readPara.indexOf(readPara[i]))) {
                readPara[i].textContent = "Yes";
                readPara[i].style.color = "#2C5530";
              }
            }
          }
        }
      };
    });
  }
});
