// Tristan Input Variables
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

// API Benson Variables
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

const moodToTime = {
  day: 35, // Comedy
  night: 27, // Drama
  dawn: 10749, // Horror
  dusk: 28, // Romance
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

//

async function main() {
    let type;
    let option;
    let mood;
    let search;
    let time;

    const typeVals = ["movie", "tv"];
    while (true) {
        type = (await ask(
            'To filter by movies, enter "movie". Or if you would like to filter by TV Shows, enter "tv".\n ')).toLowerCase();
        if (typeVals.includes(type)) break;
        console.log("Enter a valid type from the list.\n");
    }

    while (true) {
        option = parseInt(await ask("Enter a number from the following list that you want to filter by: \n\n1. Trending\n2. Top-Rated\n3. Current Mood\n4. Search\n5. Time of Day\n"));
        if (option >= 1 && option <= 5) break;
        console.log("Enter a valid option between 1 and 5.\n");
    }

    const moodVals = ["happy", "sad", "scared", "romantic", "excited", "relaxed", "thoughtful", "intense"];
    while (true) {
        if (option != 3) break;
        mood = (await ask("Enter your mood from the following list: \n\n'happy', 'sad', 'scared', 'romantic', 'excited', 'relaxed', 'thoughtful', 'intense'\n")).toLowerCase();
        if (moodVals.includes(mood)) break;
        console.log("Enter a valid mood from the list.\n");
    }

    while (true) {
        if (option != 4) break;
        search = (await ask("Enter your search query for a Movie/TV Show title:\n ")).toLowerCase();
        break;
    }

    const timeVals = ["day", "night", "dawn", "dusk"];
    while (true) {
        if (option != 5) break;
        time = (await ask("Enter the current time from the following list: 'day', 'night', 'dawn', 'dusk'\n ")).toLowerCase();
        if (timeVals.includes(time)) break;
        console.log("Enter a valid time from the list.\n");
    }

    rl.close();

    const userData = {
        type: type,
        option: option,
        mood: mood,
        search: search,
        time: time,
    };

    getData(userData);
}

async function getData(userData) {
  let movieOrTv = userData.type
  let chosenOption = userData.option

  console.log("getData called");
  console.log("movieOrTv:", movieOrTv);

  if (chosenOption == 1) {
    // User chose to see trending 
    console.log("Would call API for trending with:", movieOrTv);

    // Simple API call for trending
  } else if (chosenOption == 2){
    // User chose to see top rated
    console.log("Would call API for top rated with:", movieOrTv);

    // Simple API call for top rated
  } else if (chosenOption == 3){
    // Search with current mood

    const genreID = moodToGenre[userData.mood];

    console.log("Would call API with:", movieOrTv, genreID);

    // Call API with  (movieOrTV, genreID)
  } else if (chosenOption == 4) {
    // User wants to search a specific movie

    console.log("Would call API for specific movie with:", movieOrTv);

    // Simple API call for specific Movie 
  } else if (chosenOption == 5) {
    // User wants to search with time of day () "day", "night", "dawn", "dusk"

    const genreID = moodToTime[userData.time];

    console.log("Would call API with:", movieOrTv, genreID);

    // Call API with  (movieOrTV, genreID)
  }

  console.log("getData finished");
}

main();
