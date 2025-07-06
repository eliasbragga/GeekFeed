async function buscar() {
    const response = await fetch(`https://api-posts.thesigns.com.br/posts`)
    const data = await response.json()
    return data
}

async function popularLista() {
    const listas = await buscar()
    listas.forEach(lista => (createCard(lista.title, lista.author, lista.content)))
}
popularLista()
