/* Directions:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!
Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));
Prints: "hahaha!" */

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */
 
// declare your function
// then, call it!
// print the output with console.log


function laugh(num){
    var output = "";
  for(var i = 0;i < num;i++){
     output += "ha";
  }
  return output + "!";
}
console.log(laugh(3));







