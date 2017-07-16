var t = 60;
var task = " ";
var output = " ";

while (t >= 0) {
switch (t) {
  case 50: output = "Orbiter transfers from ground to internal power";
    break;
  case 31: output = "Ground launch sequencer is go for auto sequence start";
    break;
  case 16: output = "Activate launch pad sound suppression system";
    break;
  case 10: output = "Activate main engine hydrogen burnoff system";
    break;
  case 6: output = "Main engine start";
    break;  
  case 0: output = "Solid rocket booster ignition and liftoff!";
    break;
  default: output = "T-" + t + " seconds" 
}
console.log(output);
t--;
}