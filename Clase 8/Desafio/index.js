function loadFilms() {
    return fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(json => {
        const allFilms = document.querySelector('ul')
        const filmsData = json.results
        filmsData.map(film => {
            const movie = document.createElement('li')
            movie.innerHTML = `<h2>${film.title}</h2>`
            movie.innerHTML += `<h3>Episode: ${film.episode_id}</h3>`
            movie.innerHTML += `<br></br>`
            movie.innerHTML += `<span>${film.opening_crawl}</span>`
            let castList = '<ul>'
            film.characters.map(character => {
                fetch (character)
                .then(response => response.json())
                .then(json => {
                    const charName = json.name
                    console.log(charName)
                    castList += `<li>${charName}</li>`
                })
                
            });
            castList += '</ul>'
            movie.innerHTML += `Cast: ${castList}`
            allFilms.appendChild(movie)
        })
    })
    .catch(error => {
        console.log(error)
    })
}