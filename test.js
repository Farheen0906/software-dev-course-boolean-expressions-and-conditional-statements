const readline = require('readline-sync');

//const hasTorch = true;
const hasMap = false;
const hasCompass= true;
const hasSword = true;



console.log("Welcome to the adventure game!");
console.log("You have two paths : one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
let tool = readline.question("Do you have a Torch");

if (choice === "mountains" ){
    if(tool === "torch") {
  console.log("You safely navigate through the dark mountains.");}
  else("You should find a place for shelter");

const mountainChoice = readline.question("You encounter a wild beast! Do you 'fight' or 'run'? ");
    if (mountainChoice === "fight" && hasSword) {
      console.log("With your sword, you bravely defeat the beast and continue your journey!");
    } else if (mountainChoice === "fight" && !hasSword) {
      console.log("You try to fight, but without a weapon, the beast defeats you.");
    } else {
      console.log("You run back to safety, but you lose valuable time.");
    }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" && (hasCompass ||  hasMap) ) {
  console.log("You will find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}
