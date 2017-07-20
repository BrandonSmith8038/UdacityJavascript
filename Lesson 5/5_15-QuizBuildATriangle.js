/* Directions:
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will build a triangle. See the example output below.

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * *
We've given you one function makeLine() to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck! */


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(length)  {
  var output = '';
    for (var i = 0;i < length;i++) {
    
      output += makeLine(i + 1); 
      
  }
  return output;
}

console.log(buildTriangle(50));


