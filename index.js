
// import films from './handlebar/films.hbs';

const form = document.getElementById('search-form')
const list = document.getElementById('home__list')


form.addEventListener('submit', onClick)

function onClick(evt){
    evt.preventDefault()
    const searchFilmValue = evt.currentTarget.search.value;
    
    fetchFilms(searchFilmValue)
        .then(renderListFilms)
        // .catch(error => { console.log('Oops, there is no films with that name') })
}

function fetchFilms(name) {
    const key = 'a42a61c067e66eee5834012056e5662a'
    return fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}&trending/all&query=${name}`).then(responsive => {
        return responsive.json()
    })
}

function renderListFilms(elements) {
    console.log(elements.release_date.slice(0, 4))
    var template = Handlebars.compile(`<li>
<img class ='home__img'src=https://image.tmdb.org/t/p/w500{{backdrop_path}} alt="Фильм"/>
<h1>{{original_title}}</h1>
    {{#each genres}}<p>{{name}}</p>
    {{/each}}
    <p>{{release_date}}</p>
 </li>`);
const addImg = template(elements);
    return list.innerHTML = addImg;
}



    


