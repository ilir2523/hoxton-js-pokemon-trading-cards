// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function createCard (data) {
    
    const liEl = document.createElement("li")
    liEl.setAttribute("class", "card")
    document.querySelector('.cards').prepend(liEl)

    
    const h2El = document.createElement("h2")
    h2El.setAttribute("class", "card--title")
    h2El.textContent = data.name.toUpperCase()

    const imgEl = document.createElement("img")
    imgEl.setAttribute("class", "card--img")
    imgEl.setAttribute("src", data.sprites.other["official-artwork"].front_default)
    imgEl.setAttribute("width", "256")

    document.querySelector('.card').prepend(h2El, imgEl)

    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "card--text")

    document.querySelector('.card').append(ulEl)

    const liEl1 = document.createElement("li")
    liEl1.textContent = "HP: " + data.stats[0].base_stat

    const liEl2 = document.createElement("li")
    liEl2.textContent = "ATTACK: " + + data.stats[1].base_stat

    const liEl3 = document.createElement("li")
    liEl3.textContent = "DEFENSE: " + + data.stats[2].base_stat

    const liEl4 = document.createElement("li")
    liEl4.textContent = "SPECIAL-ATTACK: " + + data.stats[3].base_stat

    const liEl5 = document.createElement("li")
    liEl5.textContent = "SPECIAL-DEFENSE: " + + data.stats[4].base_stat

    const liEl6 = document.createElement("li")
    liEl6.textContent = "SPEED: " + + data.stats[5].base_stat


    document.querySelector('.card--text').prepend(liEl1, liEl2, liEl3, liEl4, liEl5, liEl6)
}


// createCard ("Charizard", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")
// createCard ("Charmeleon", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png")
// createCard ("Charmander", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png")
// createCard ("Venusaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg")
// createCard ("Ivysaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
// createCard ("Bulbasau", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png")

function createAllCards() {
    for (let i = (data.length - 1); i >= 0; i--) {
        createCard(data[i])
    }
}

createAllCards()

// createCard(data[0])