const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let responses = {
  fullname: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  sport: "",
  power: "",
};

rl.question('What\'s your name / nickname? ', (answer) => {
  responses.fullname = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    responses.activity = answer;
    rl.question('What to you listen to while doing that? ', (answer) => {
      responses.music = answer;
      rl.question('Which meal is your favourite? ', (answer) => {
        responses.meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          responses.food = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            responses.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what your amazing at! ', (answer) => {
              responses.power = answer;
              generateProfile();
              rl.close();
            });
          });
        });
      });
    });
  });
});

const generateProfile = function() {
  console.log(`${responses.fullname} loves listening to ${responses.music} while ${responses.activity}, devouring ${responses.food} for ${responses.meal}, 
  prefers ${responses.sport} over any other sport, and is amazing at ${responses.power}.`)
};






