/* heater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.

Example output for row-seat information: output each row and seat number on a separate line

0-0
0-1
0-2
...
25-97
25-98
25-99
*/

for (var row = 0;row < 26;row++) {
  for (var seat = 0;seat <= 99;seat++){
    console.log(row + "-" + seat);
  }
} 