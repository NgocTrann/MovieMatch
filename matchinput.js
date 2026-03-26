const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
    let type;
    let option;
    let mood;
    let search;
    let time;

    const typeVals = ["movie", "tv"];
    while (true) {
        type = (await ask(
            'To filter by movies, enter "movie". Or if you would like to filter by TV Shows, enter "tv". ')).toLowerCase();
        if (typeVals.includes(type)) break;
        console.log("Enter a valid type from the list.");
    }

    while (true) {
        option = parseInt(await ask("Enter a number from the following list that you want to filter by: \n\n1. Trending\n2. Top-Rated\n3. Current Mood\n4. Search\n5. Time of Day"));
        if (option >= 1 && option <= 5) break;
        console.log("Enter a valid option between 1 and 5.");
    }

    const moodVals = ["happy", "sad", "scared", "romantic", "excited", "relaxed", "thoughtful", "intense"];
    while (true) {
        if (option != 3) break;
        mood = (await ask("Enter your mood from the following list: \n\n'happy', 'sad', 'scared', 'romantic', 'excited', 'relaxed', 'thoughtful', 'intense'")).toLowerCase();
        if (moodVals.includes(mood)) break;
        console.log("Enter a valid mood from the list.");
    }

    while (true) {
        if (option != 4) break;
        search = (await ask("Enter your search query for a Movie/TV Show title: ")).toLowerCase();
        break;
    }

    while (true) {
        if (option != 5) break;
        time = await ask("Enter the current time in military format: ");
        if (isValidTime(time)) break;
        console.log("Enter a valid time in HH:MM format.");
    }

    rl.close();

    const userData = {
        type: type,
        option: option,
        mood: mood,
        search: search,
        time: time,
        genre: genre
    };
}

main();
