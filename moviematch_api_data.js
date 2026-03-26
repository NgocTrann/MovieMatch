require("dotenv").config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const moodToGenre = {
  happy: 35, // Comedy
  sad: 18, // Drama
  scared: 27, // Horror
  romantic: 10749, // Romance
  excited: 28, // Action
};

async function getTrending(movieOrTv) {
  const res = await fetch(
    `${BASE_URL}/trending/${movieOrTv}/week?api_key=${API_KEY}`,
  );
  const data = await res.json();
  console.log(data.results);
}

async function getByMood(movieOrTv, mood) {
  const genreID = moodToGenre[mood];
  const res = await fetch(
    `${BASE_URL}/discover/${movieOrTv}?api_key=${API_KEY}&with_genres=${genreID}`,
  );
  const data = await res.json();

  // console.log(data.results);
  if (movieOrTv == "movie") {
    console.log(`Movies matching your ${mood} mood:\n`);

    for (const movie of data.results) {
      console.log(`Title: ${movie.title}\nDesc: ${movie.overview}\n\n`);
    }
  } else if (movieOrTv == "tv") {
    console.log(`TV series matchiing your ${mood} mood:\n`);
  }
}

movieOrTv = "movie";
mood = "sad";

getByMood(movieOrTv, mood);
