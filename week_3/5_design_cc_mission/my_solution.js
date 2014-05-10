// I worked with Andrew Adams on this challenge

// Your mission description:
// Explosions
// Destroy the wall
// Character
// Wall
// Bomb
// Character places bomb at wall and runs away

// Pseudocode
// 1. Define objects
//  give character attributes (name, bomb(boolean value), distance from wall, move, set timer, health)
//  give bomb attributes (timer, attack strength)
//  wall (health)


// Initial Code
var theBomber = {
  name: "Maximillian",
  bomb: false,
  distance: 10,
  health: 100,
  plant: false,
  currentDistance: function() {
    console.log("Your distance is now " + this.distance.toString());
    if (this.bomb){
        console.log("The bomb timer is now " + thePackage.timer.toString());        
    }
  },
  move: function(direction) {
    if(direction === "right") {
      this.distance -= 1;
    }
    else if(direction === "left") {
      this.distance += 1;
    }
    else {
      console.log("You can't move that way!");
    }
    
    if (this.bomb){
        thePackage.timer -= 1;
        if (thePackage.timer === 0) {
          if (this.plant) {
            if (this.distance > 0) {
              console.log("Congratulations, you win!")
            } else {
              console.log("You blew up the wall! And yourself!")
            }
          } else {
            console.log("You blew yourself up! And not the wall. You lose.")
          }
        }
    }
    
    this.currentDistance();
  },
  bombPlant: function() {
    if(this.distance === 0){
      this.plant = true;
      console.log("The bomb is now planted. You should run away.");
    }
  }
}

var thePackage = {
    timer: 10,
    attackStrength: 100,
}

var theWall = {
    health: 100,
}

theBomber.bomb = true;

// Refactored Code

var theBomber = {
  bomb: false,
  distance: 10,
  plant: false,
  currentDistance: function() {
    console.log("Your distance is now " + this.distance.toString());
    if (this.bomb){
        console.log("The bomb timer is now " + thePackage.timer.toString());        
    }
  },
  move: function(direction) {
    if(direction === "right") {
      this.distance -= 1;
    }
    else if(direction === "left") {
      this.distance += 1;
    }
    else {
      console.log("You can't move that way!");
    }
    
    if (this.bomb){
        thePackage.timer -= 1;
        if (thePackage.timer === 0) {
          if (this.plant) {
            if (this.distance > 0) {
              console.log("Congratulations, you win!")
            } else {
              console.log("You blew up the wall! And yourself!")
            }
          } else {
            console.log("You blew yourself up! And not the wall. You lose.")
          }
        }
    }
    this.currentDistance();
  },
  bombPlant: function() {
    if(this.distance === 0){
      this.plant = true;
      console.log("The bomb is now planted. You should run away.");
    }
  }
}

var thePackage = {
    timer: 10,
}


// Reflection
// This was a lot of fun! We ended with ideas that were pretty complicated, so we tried to simplify what our goals were as we worked
// through the challenge. We'd get to a point an realize, "Oh, if we're going to do x, then we need a whole bunch of code to do y first".
// I suppose that's how a lot of projects end up, with ideas that are much bigger than reality might allow in a reasonable time frame.
// My understanding of Javascript was somewhat solidified during this challenge, but I often found myself a bit lost trying to follow the
// properties and values of all of the objects, and what we were doing with them. Each time we used one, I had to mentally step through
// the process to see how it was being used, and what the output was going to be. I can't just see how it's going to work by looking at
// it, at least not yet. I look forward to using objects more, hopefully I will have the concepts more solidified soon.
// 
// 