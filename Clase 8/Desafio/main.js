const loadJson = () => {
    return fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(json => {
        const allCharacters = {}
        const list = document.querySelector('ul')
        for(let i=0; i < json.results.length; i++){
            const movie = document.createElement('li')
            movie.innerHTML = `<h3>${json.results[i].title}</h3>`
            movie.innerHTML += `<p>Episode ${json.results[i].episode_id}</p>`
            movie.innerHTML += `<p>${json.results[i].opening_crawl}</p>`
            let castList = '<ul>'
            json.results[i].characters.forEach(character => {
                let urlSplit = character.split('/')
                let id = urlSplit[5]
                if(allCharacters[id]){
                    castList += `<li>${allCharacters[id]}</li>`
                }else{
                    fetch(character)
                    .then(response => response.json())
                    .then(json =>{
                        allCharacters[id] = json.name
                        castList += `<li>${allCharacters[id]}</li>`
                                     
                    })
                    castList += `<li>${allCharacters[id]}</li>`                

                }
            });
            
            castList += '<ul>'
            movie.innerHTML += `Cast: ${castList}`
            list.appendChild(movie)
        }
        console.log(allCharacters)
    })
    .catch(error => {
        console.log(error)
    })//investigar que error mostrar
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