// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function - ??can we explain this differently? why make it a var?
var fight = function(enemyName) {
  // Alert players that they are starting the round
// repeat and execute as long as the enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
// if player picks "skip" confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
      console.log("playerMoney", playerMoney)
      break;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } 
  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    }
    // check enemy's health -- question here whats the deal with structure? space indents, etc. does it matter on placement like it does in CSS?
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      //window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    } 
  }
  
  else {
    window.alert("You need to pick a valid option. Try again!");
  }
}
};
// how do i understand the difference between the while and for loops? why use one over the other?

//function to start a new game
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robt Gladiators!" + " Round " + (i +1));
    
      var pickedEnemyName = enemyNames[i];
      enemyHealth  = 50;
    // call fight function with enemy-robot
      fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    //after the loop ends, play is either out of health or enemies to fight.
    endGame();
}
};

// function to end the entire game 
var endGame = function() {
  //if player is still alive, player wins!
  if (playerHealth > 0) {
  window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    Window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("would you like to play again?");

if (playAgainConfirm) {
  //restart game
  startGame();
}
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};



// start the game when the age laods
startGame();
