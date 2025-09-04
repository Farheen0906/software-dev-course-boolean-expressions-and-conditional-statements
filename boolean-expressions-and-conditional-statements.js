/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');


console.log("Welcome to the adventure game!");
console.log("You wake up in a dark forest and have two options: one leads to the mountains, the other to the village.");
//ask the player to select two tools
console.log("Pick the tools you need in the journey");
let hasTorch = readline.question("Do you want a torch with you? (yes/no): ").toLowerCase() === "yes";
let hasSword = readline.question("Do you want a sword with you? (yes/no): ").toLowerCase() === "yes";
let hasMap = readline.question("Do you want a map with you? (yes/no): ").toLowerCase() === "yes";
//let hasCompass = readline.question("Do you want a compass with you? (yes/no): ").toLowerCase() === "yes";

// path choice
const choice = readline.question("\nDo you go to the 'mountains' or the 'village'? ").toLowerCase();
// Handle mountains path
if (choice === "mountains"){
 console.log("\nYou start heading towards the mountains. The path is steep and dangerous.Be careful!");
  if (hasTorch && hasMap) {
    console.log("With your torch and map, you find a safe path and start climbing !");
    const mountainChoice = readline.question("You encounter a wild beast! Do you 'fight' or 'run'? ");
    if (mountainChoice === "fight" && hasSword) {
          console.log("With your sword, you bravely defeat the beast and continue your journey!");
  } else if (!hasSword) {
    console.log("Try fighting the beast with whatever you can and try escaping");
  } else 
    console.log("Find a safe place for shelter,to survive the night!");
  }
} else if (choice === "village" && !hasTorch && !hasMap) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" && hasTorch && hasMap)  {
  console.log("You will find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

















/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.


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





*/