// ---Refactored Code---

// Variable to use throughout code
var add = [1, 2, 3, 4, 5, 9];

// Code for user story 1:
function sum(sumArray){
	var answer = 0;
	for (var i=0; i<sumArray.length; i++) {
		var answer = answer + sumArray[i];
	};
	return answer
};
console.log("Your sum is " + sum(add));

// Code for user story 2:
var mean = function(meanArray){
    var answer = 0;
    for (var i=0; i<meanArray.length; i++){
    	var answer = answer + meanArray[i];
    };
    var means = answer / meanArray.length;
    return means;
};
console.log("Your mean is " + mean(add));

// Code for user story 3:
var median = function(medianArray) {
	var upArray = medianArray.sort();
	var middleNum = Math.floor(upArray.length / 2);
	if (upArray.length % 2 === 0) {
	    var middle = (upArray[middleNum-1] + upArray[middleNum]) / 2;
	    return middle;
	} else {
	    var middle = (upArray[middleNum]);
	    return middle;
	};
};
console.log("Your median is " + median(add));

/* User stories

1. As a user, I need a program to return the sum of any array of numbers.
2. As a user, I need a program to return the average of any array of numbers.
3. As a user, I need a program to return the median number of any array of numbers.

Re-translated user stories, slighty more interesting:

Story 1:
Hello good sir. I was traveling down the alley to my local pub, when I saw the most peculiar thing. Cats! Tons and tons of cats!
They were all sitting in a row, divided into groups by color. How strange. There were 5 black cats, 10 orange cats, 7 grey cats, and
3 white cats. I wonder how many cats there were all together? If only there were some grand device to count all of the cats at once. Perhaps
you could write something on this here fancy computer? I hear javascript is all the rage with the young whippersnappers these days, you
might have a jolly good time using that.

Story 2:
YAR! I be th' best scurvy pirate in all 'o th' seven seven seas. Just th' other day, I sank 3 enemy ships! th' day before that
 I sunk 6! 'n th' day before that I sunk 7! I wonder how many ships I sink in a day on average. They be tellin' me ye're jolly
  wit' numbers, scribe me a program or I'll make ye walk th' plank.

Story 3:
G'day mate! I've made a right mess of this one. Can you help me sort out all of these kangaroos? I've got 10 over here, 5 over 
there and 8 out in the bush. But I need to know how many kangaroos would be right in the middle! Quit yer winge'in and write me
something to get this sorted out.