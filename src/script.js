function createCard (title, username, content){

    const cards = document.querySelector(".container_cards")
    const divCard = document.createElement("div")
    divCard.classList.add("cards")
    const titleCard = document.createElement("h2")
    const usernameCard = document.createElement("p")
    const contentCard = document.createElement("p")
   
    titleCard.innerText = title
    usernameCard.innerText = username
    contentCard.innerText = content

    divCard.appendChild(titleCard)
    divCard.appendChild(usernameCard)
    divCard.appendChild(contentCard)
    cards.appendChild(divCard)
}


createCard("titulo", "nome de usuario", "conteudo")