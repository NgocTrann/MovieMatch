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

const genreIDs = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

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
  if (movieOrTv == "movie") {
    console.log(`Movies matching your ${mood} mood:\n`);
    for (const movie of data.results) {
      console.log(
        `Title: ${movie.title}\nGenre: ${movie.genre_ids}\nDesc: ${movie.overview}\n\n`,
      );
    }
  } else if (movieOrTv == "tv") {
    console.log(`TV Shows matching your ${mood} mood:\n`);
    for (const series of data.results)
      console.log(`Name: ${series.name}\nDesc: ${series.overview}\n\n`);
  }
}

movieOrTv = "tv";
mood = "sad";

getByMood(movieOrTv, mood);
