const numberOfFilms = +prompt('сколько ви уже смотрели фильмов', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний фильм ?', ''),
    b = prompt('На сколько оцените его ?', ''),
    c = prompt('Последний фильм ?', ''),
    d = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);