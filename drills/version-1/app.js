const starFilmsAPI = ('https://swapi.co/api/films')
const phantomAPI = ('https://cors-anywhere.herokuapp.com/http://omdbapi.com/?t=star+wars%3A+episode+I&apikey=ef242b2a') 
const clonesAPI = ('https://cors-anywhere.herokuapp.com/http://omdbapi.com/?t=star+wars%3A+episode+II&apikey=ef242b2a') 
const sithAPI = ('https://cors-anywhere.herokuapp.com/http://omdbapi.com/?t=star+wars%3A+episode+III&apikey=ef242b2a') 
const hopeAPI = ('https://cors-anywhere.herokuapp.com/http://omdbapi.com/?t=star+wars%3A+episode+IV&apikey=ef242b2a') 
const empireAPI = ('https://cors-anywhere.herokuapp.com/http://omdbapi.com/?t=star+wars%3A+Episode+V&apikey=ef242b2a')
const jediAPI = ('https://cors-anywhere.herokuapp.com/http://omdbapi.com/?t=star+wars%3A+Episode+VI&apikey=ef242b2a') 

let movies = document.getElementsByClassName('movie-list')[0]

let phantom = document.createElement('button')
let clones = document.createElement('button')
let sith = document.createElement('button')
let hope = document.createElement('button')
let empire = document.createElement('button')
let jedi = document.createElement('button')

fetch (starFilmsAPI)
.then (response => response.json())
.then (filmJSON = filmJSON => {
    starWarsFilms(filmJSON)
})

function starWarsFilms(filmJSON) { 
    let phantomTitle = filmJSON.results[2].title
    let cloneTitle = filmJSON.results[1].title
    let sithTitle = filmJSON.results[3].title
    let hopeTitle = filmJSON.results[0].title
    let empireTitle = filmJSON.results[5].title
    let jediTitle = filmJSON.results[4].title


    phantom.textContent = phantomTitle
    movies.appendChild(phantom)
    phantom.addEventListener('click', changePoster)

    clones.textContent = cloneTitle
    movies.appendChild(clones)
    clones.addEventListener('click', changePoster)

    sith.textContent = sithTitle
    movies.appendChild(sith)
    sith.addEventListener('click', changePoster)

    hope.textContent = hopeTitle
    movies.appendChild(hope)
    hope.addEventListener('click', changePoster)

    empire.textContent = empireTitle
    movies.appendChild(empire)
    empire.addEventListener('click', changePoster)

    jedi.textContent = jediTitle
    movies.appendChild(jedi)
    jedi.addEventListener('click', changePoster)

}

function changePoster(event) {
    if (event.target.textContent === 'The Phantom Menace') {
        fetch (phantomAPI)
        .then (response => response.json())
        .then (phantomJSON = phantomJSON => {
        phantomPoster(phantomJSON)
    })

    }else if (event.target.textContent === 'Attack of the Clones') {
        fetch (clonesAPI)
        .then (response => response.json())
        .then (cloneJSON = cloneJSON => {
        clonePoster(cloneJSON)
    })
    
    }else if (event.target.textContent === 'Revenge of the Sith') {
        fetch (sithAPI)
        .then (response => response.json())
        .then (sithJSON = sithJSON => {
        sithPoster(sithJSON)
        })

    }else if (event.target.textContent === 'A New Hope') {
        fetch (hopeAPI)
        .then (response => response.json())
        .then (hopeJSON = hopeJSON => {
        hopePoster(hopeJSON)
        })
    
    }else if (event.target.textContent === 'The Empire Strikes Back') {
        fetch (empireAPI)
        .then (response => response.json())
        .then (empireJSON = empireJSON => {
        empirePoster(empireJSON)
        })
        
    }else if (event.target.textContent === 'Return of the Jedi') {
        fetch (jediAPI)
        .then (response => response.json())
        .then (jediJSON = jediJSON => {
        jediPoster(jediJSON)
        })
    }

}

function phantomPoster(phantomJSON) {
    let moviePoster = document.createElement('img')
    let poster = phantomJSON.Poster
    let posters = document.getElementById('posters')

    moviePoster.setAttribute('src', poster)
    posters.appendChild(moviePoster) 
}

function clonePoster(cloneJSON) {
    let moviePoster = document.createElement('img')
    let poster = cloneJSON.Poster
    let posters = document.getElementById('posters')

    moviePoster.setAttribute('src', poster)
    posters.appendChild(moviePoster) 
}
function sithPoster(sithJSON) {
    let moviePoster = document.createElement('img')
    let poster = sithJSON.Poster
    let posters = document.getElementById('posters')

    moviePoster.setAttribute('src', poster)
    posters.appendChild(moviePoster) 
}
function hopePoster(hopeJSON) {
    let moviePoster = document.createElement('img')
    let poster = hopeJSON.Poster
    let posters = document.getElementById('posters')

    moviePoster.setAttribute('src', poster)
    posters.appendChild(moviePoster) 
}
function empirePoster(empireJSON) {
    let moviePoster = document.createElement('img')
    let poster = empireJSON.Poster
    let posters = document.getElementById('posters')

    moviePoster.setAttribute('src', poster)
    posters.appendChild(moviePoster) 
}
function jediPoster(jediJSON) {
    let moviePoster = document.createElement('img')
    let poster = jediJSON.Poster
    let posters = document.getElementById('posters')

    moviePoster.setAttribute('src', poster)
    posters.appendChild(moviePoster) 
}






