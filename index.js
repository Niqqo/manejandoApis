const formSouthparkEpisodios = document.querySelector("#formulario-southpark-episodios")
const inputEpisodioSouthpark = document.querySelector("#episodios-southpark")

const formRickmortyPersonajes = document.querySelector("#formulario-rickmorty-personajes")
const inputPersonajeRickmorty = document.querySelector("#personajes-rickmorty")

formSouthparkEpisodios.onsubmit = (e) => {
    e.preventDefault()

    fetch(`https://spapi.dev/api/episodes/${inputEpisodioSouthpark.value}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

formRickmortyPersonajes.onsubmit = (e) => {
    e.preventDefault()

    fetch(`https://rickandmortyapi.com/api/character/?name=${inputPersonajeRickmorty.value}`)
    .then(res => res.json())
    .then(data => console.log(data))
}