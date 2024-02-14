const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  let name = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    let activity = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      let music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        let favoriteMealTime = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          let favoriteFood = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            let favoriteSport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              let superPower = answer;

              console.log(`${name} loves to go ${activity} and also loves listening to ${music}. ${name} loves to eat ${favoriteFood} during ${favoriteMealTime} while watching ${favoriteSport}. ${name} describes ${name}'s superpower like this: ${superPower}`);

              rl.close();
            });
          });
        });
      });
    });
  });





});
