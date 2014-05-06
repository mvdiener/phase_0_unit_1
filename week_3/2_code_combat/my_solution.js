// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//-----Rescue Mission-----
// --Pseudocode--
// move down
// move right
// move up
// move right
// move down
// attack!
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 
 
//-----Grab the Mushroom-----
// --Pseudocode--
// move up
// move right and get mushroom
// move back left
// move up
// attack!
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();



//-----Drink Me-----
// --Pseudocode--
// move right
// attack!
// move right
// move down and get health potion
// move up
// move right
// attack!
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


//-----Taunt the Guards-----
// --Pseudocode--
// move right and smash door
// move right
// yell at guard
// move left
// tell Phoebe to attack
// move right
// move up
// move right and yell at other guards
// move down when the guards chase you
// move right
// move up
// move right and escape!

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("SUP BRO");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("SUP BREH");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


//-----It's a Trap-----
// --Pseudocode--
// move down and yell at the ogre
// move up and let archers attack
this.moveDown();
this.moveDown();
this.say("YOU SUCK");
this.moveUp();
this.say("Attack!");
this.moveUp();


//-----Break the Prison-----
// --Pseudocode--
// set true/false statements for each name

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "Grul'Thock")
    return false;
if(name === "MARCUS")
    return false;
return true;


//-----Taunt-----
// --Pseudocode--
// move up
// yell at the ogre a bunch
// move down

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("You smell so bad");
this.say("You smell so bad I can smell you from 40 meters away");
this.say("I'm trying to talk to you, but it's hard to do that AND hold my nose");


//-----Cowardly Taunt-----
// --Pseudocode--
// move in front of the tower
// yell stuff to the ogres
// move between the towers
this.moveXY(50, 16);
this.say("Catch me if you can!");
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");


//-----Commanding Followers-----
// --Pseudocode--
// move towards soldiers
// tell soldiers to follow you
// move with soldiers to be in range of ogres
// tell soldiers to attack ogres 
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends! Follow me to battle!");
this.moveXY(61, 39);
this.say("Attack those ugly ogres!");


//-----Commanding Followers-----
// --Pseudocode--
// move cannon within range of ogres
// attack
// move in range of 2nd group
// attack
// attack again as big ogre moves to attack you
// move in range of 3rd group
// attack
// attack again as big ogre moves to attack you
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(24, 54);
this.attackXY(48, 65);
this.attackXY(37, 58);
this.moveXY(42, 49);
this.attackXY(69, 56);
this.attackXY(55, 50);
 
// Reflection:
// Write your reflection here.
// this. seems to be referring to the object that we are controlling. The () appear to take parameters for the function.
// Lastly, the ; isn't necessary most of the time, but it's good practice to use it.

// This challenge was fun for me, who doesn't like games? It was a little confusing at first since the code was 
// executing each time I typed something, but after I figured out how to turn that off it went much more smoothly. 
// I enjoyed the trial-and-error nature of this challenge - writing a bit of code to make the character do what I 
// think he'll do, and then get to watch how accurate my guesses were. This is an intro to javascript, but I'm still 
// not quite sure how I'd apply what I learned playing this game to something I'd actually use on my web page. 
// I suppose that's a lesson for another day!