function createCard(title, username, content, likes) {

    const cards = document.querySelector(".container_cards")
    const divCard = document.createElement("div")
    const titleCard = document.createElement("h2")
    const usernameCard = document.createElement("p")
    const contentCard = document.createElement("p")
    const buttonLike = document.createElement("button") // TODO remover constante nao utilizada
    const like = document.createElement("span")
    const divButtonLikeComment = document.createElement("div")
    const icon = document.createElement("ion-icon")
    const divLike = document.createElement("div")

    clickHeart(icon) // chamar funcao no fim de tudo

    
    divCard.classList.add("cards")
    divButtonLikeComment.classList.add("btn-like-comment") 
    
    // aqui ja está sendo utilizado o padrao classList.add(). continuar seguindo o padrão ao inves de usar o className
    divLike.className = 'large-font text-center top-20'

    icon.setAttribute("name", "heart")

    titleCard.innerText = title
    usernameCard.innerText = username
    contentCard.innerText = content
    like.innerText = likes

    // aqui é possível criar uma função para adicionar filhos a uma tag
    // sempre que ver muito código se repetindo(appendChild()), estranhe, pense que isso poderia ser uma funcao reutilizavel
    // const adicionarFilho = (tagPai, tagFilha) => tagPai.appendChild(tagFilha)
    // adicionarFilho(divCard,titleCard)
    divCard.appendChild(titleCard)
    divCard.appendChild(usernameCard)
    divCard.appendChild(contentCard)
    divLike.appendChild(icon)
    divButtonLikeComment.appendChild(divLike)
    divButtonLikeComment.appendChild(like)
    divCard.appendChild(divButtonLikeComment)
    cards.appendChild(divCard)
}
async function buscar() {
    const response = await fetch(`https://api-posts.thesigns.com.br/posts`)
    const data = await response.json()
    return data
}
async function popularLista() {
    const listas = await buscar()
    listas.forEach(lista => (createCard(lista.title, lista.author, lista.content, lista.likes ?? "0")))

}

// popularLista()

function clickHeart(icon) {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        setTimeout(() => {
            icon.classList.remove('active');
        }, 800);
    });
}