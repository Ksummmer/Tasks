"use strict";


//while (num <= 55) {
//console.log(num);
// num++;
//}

//do {
//    console.log(num);
//   num++;  
//}
//while (num < 55);

//for (let i = 1; i < 8; i++) {
//    console.log(num);
//    num++;
//}

let numberofFilms;

function start() {
    numberofFilms = +prompt("How many movies have you watched?", " ");

    while (numberofFilms == '' || numberofFilms == null || isNaN (numberofFilms)){
        numberofFilms = +prompt("How many movies have you watched?", " ");
    }

}

start();



const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//const a = prompt('Один из последних просмотренных фильмов?', ' '),
//      b = prompt('На сколько его оцените?', ' '),
//      c = prompt('Один из последних просмотренных фильмов?', ' '),
//      d = prompt('На сколько его оцените?', ' ');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;


function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ' '),
              b = prompt('На сколько его оцените?', ' ');
     
        
        if (a != null && b != null && a != '' && a != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
            } else {
                console.log('error');
                i--;
            }
    }
    
}
//rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');}
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');    
        }
        else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    }
        else {
        console.log('Произошла ошибка');
        }
}
//detectPersonalLevel();


//function showMyDB() {
 //   while (personalMovieDB.privat == true){
 //       console.log(personalMovieDB);
//}
//}

//showMyDB();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
}
}

showMyDB(personalMovieDB.privat);



function WriteyourGenres(){
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favourite genre under the number ${i}?`);
              personalMovieDB.genres [i - 1] = genre;
        
            }
    }
    


WriteyourGenres();


console.log(personalMovieDB);

