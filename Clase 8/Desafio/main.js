const getCharacter = async(url) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data.name
    }catch(error){
        console.log(error)
    }
}

const loadFilms = async() => {
    try{
        const response = await fetch('https://swapi.dev/api/films')
        const json = await response.json()
        const filmsData = json.results
        const allFilms = document.querySelector('ul')
        filmsData.map(async film => {
            const movie = document.createElement('li')
            movie.innerHTML = `<h2>${film.title}</h2>`
            movie.innerHTML += `<h3>Episode: ${film.episode_id}</h3>`
            movie.innerHTML += `<br></br>`
            movie.innerHTML += `<span>${film.opening_crawl}</span>`
            movie.innerHTML += `<br></br>`
            let castList = '<ul>'
            let charByFilm = film.characters.map(async url =>{
                return `<li>${await getCharacter(url)}</li>`
            })
            let results = await Promise.all(charByFilm)
            castList += results.join('')
            castList += '</ul>'
            movie.innerHTML += `Cast: ${castList}`
            allFilms.appendChild(movie)
        })

    }catch(error){
        console.log(error)
    }
}

//Opcion para llenar un objeto con todos los personajes

// function getAllCharacters(){
//     const characters = {}
//     return fetch('https://swapi.dev/api/people')
//     .then(response => response.json())
//     .then(json =>{
//         for (let i = 1; i <= json.count+1; i++) {
//             fetch(`https://swapi.dev/api/people/${i}`)
//             .then(response => response.json())
//             .then(json => {
//                 characters[json.url] = json.name
//             })            
//         }
//         console.log(characters)
//     })
// }