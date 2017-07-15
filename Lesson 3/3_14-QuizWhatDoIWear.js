/* Directions:
Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)
Then print L to the console.

Hint: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve. For example, if the shirt's width is at least 20", but no more than 22", then the t-shirt should be medium (M) — as long as the other values for the shirt's length and sleeve measurements match up.

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print N/A to the console. For example, if...

var shirtWidth = 18; // size S (S)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

TIP: Make sure to test your code with different values. For example,

If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21, then S should be printed to the console.
If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63, then 2XL should be printed to the console.
If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47, then N/A should be printed to the console. */




/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;
var shirtWidthSize = "";
var shirtLengthSize = "";
var shirtSleeveSize = "";

var size = "";

// your code goes here
if (shirtWidth == 18 || shirtWidth == 19) {
  shirtWidthSize = "S";
}
else if (shirtWidth == 20 || shirtWidth == 21) {
  shirtWidthSize = "M";
}
else if(shirtWidth == 22 || shirtWidth == 23) {
  shirtWidthSize = "L";
}
else if(shirtWidth == 24 || shirtWidth == 25) {
  shirtWidthSize = "XL";
}
else if(shirtWidth == 26 || shirtWidth == 27) {
  shirtWidthSize = "2XL";
}
else if(shirtWidth < 27) {
  shirtWidthSize = "3XL";
}
else {
  console.log("N/A");
}

if (shirtLength === 28) {
  shirtLengthSize = "S";
}
else if (shirtLength === 29) {
  shirtLengthSize = "M";
}
else if(shirtLength === 30) {
  shirtLengthSize = "L";
}
else if(shirtLength === 31 || shirtLength === 32) {
  shirtLengthSize = "XL";
}
else if(shirtLength === 33) {
  shirtLengthSize = "2XL";
}
else if(shirtLength < 34) {
  shirtLengthSize = "3XL";
}
else {
  console.log("N/A");
}

if (shirtSleeve > 8.13 && shirtSleeve < 8.38) {
  shirtSleeveSize = "S";
}
else if (shirtSleeve > 8.37 && shirtSleeve < 8.63) {
  shirtSleeveSize = "M";
}
else if(shirtSleeve > 8.62 && shirtSleeve < 8.88) {
  shirtSleeveSize = "L";
}
else if(shirtSleeve > 8.86 && shirtSleeve < 8.63) {
  shirtSleeveSize = "XL";
}
else if(shirtSleeve > 9.62 && shirtSleeve < 10.13) {
  shirtSleeveSize = "2XL";
}
else if(shirtSleeve < 10.13) {
  shirtSleeveSize = "3XL";
}
else {
  console.log("N/A");
}
  
  
if (shirtLengthSize === "S" && shirtWidthSize === "S" && shirtSleeveSize === "S" ) {
  size = "S";
console.log(size);
}else if (shirtLengthSize === "M" && shirtWidthSize === "M" && shirtSleeveSize === "M" ) {
  size = "M"; 
console.log(size);}
else if (shirtLengthSize === "L" && shirtWidthSize === "L" && shirtSleeveSize === "L" ) {
  size = "L"; 
console.log(size);}
else if (shirtLengthSize === "XL" && shirtWidthSize === "XL" && shirtSleeveSize === "XL" ) {
  size = "XL"; 
console.log(size);}
else if (shirtLengthSize === "2XL" && shirtWidthSize === "2XL" && shirtSleeveSize === "2XL" ) {
  size = "2XL"; 
console.log(size);}
else if (shirtLengthSize === "3XL" && shirtWidthSize === "3XL" && shirtSleeveSize === "3XL" ) {
  size = "3XL"; 
console.log(size);}
else{
  console.log("N/A");
    }

/*console.log("Shirth Length Size: " + shirtLengthSize);
console.log("Shirt Sleeve Size: " +shirtSleeveSize);
console.log("Shirt Width Size: " + shirtWidthSize);
size = shirtLengthSize;
console.log("Size: " + size);*/
  
  
  
  
  
  
  
  
  
  
  
  
  