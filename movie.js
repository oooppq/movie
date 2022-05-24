const APIKEY = '16452ff165a8604e2f03f165d4e6595f'

imgURL = 'https://image.tmdb.org/t/p/w500'
nowplayingURL =`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`
popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`
upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}

fetch(nowplayingURL, options)
.then(response => response.json())
.then(response => {
    nowPlaying = document.querySelector('#now-playing');
    response.results.forEach((element) => {
        poster_path = element.backdrop_path;
        title = element.original_title;
        rate = element.vote_average;
        console.log(poster_path + title + rate);
        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute('src', imgURL + poster_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerHTML = title;
        let movieRate = document.createElement('span');
        movieRate.innerHTML = rate;
        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);
        movie.appendChild(movieDiv);
        nowPlaying.appendChild(movie);
    })
});

fetch(popularURL, options)
.then(response => response.json())
.then(response => {
    popular = document.querySelector('#popular');
    response.results.forEach((element) => {
        poster_path = element.backdrop_path;
        title = element.original_title;
        rate = element.vote_average;
        console.log(poster_path + title + rate);
        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute('src', imgURL + poster_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerHTML = title;
        let movieRate = document.createElement('span');
        movieRate.innerHTML = rate;
        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);
        movie.appendChild(movieDiv);
        popular.appendChild(movie);
    })
});

fetch(topRatedURL, options)
.then(response => response.json())
.then(response => {
    topRated = document.querySelector('#top-rated');
    response.results.forEach((element) => {
        poster_path = element.backdrop_path;
        title = element.original_title;
        rate = element.vote_average;
        console.log(poster_path + title + rate);
        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute('src', imgURL + poster_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerHTML = title;
        let movieRate = document.createElement('span');
        movieRate.innerHTML = rate;
        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);
        movie.appendChild(movieDiv);
        topRated.appendChild(movie);
    })
});

fetch(upcomingURL, options)
.then(response => response.json())
.then(response => {
    upcoming = document.querySelector('#upcoming');
    response.results.forEach((element) => {
        poster_path = element.backdrop_path;
        title = element.original_title;
        rate = element.vote_average;
        console.log(poster_path + title + rate);
        let movie = document.createElement('li');
        let movieDiv = document.createElement('div');
        let movieImg = document.createElement('img');
        movieImg.setAttribute('src', imgURL + poster_path);
        let movieTitle = document.createElement('h4');
        movieTitle.innerHTML = title;
        let movieRate = document.createElement('span');
        movieRate.innerHTML = rate;
        movieDiv.appendChild(movieImg);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieRate);
        movie.appendChild(movieDiv);
        upcoming.appendChild(movie);
    })
});


