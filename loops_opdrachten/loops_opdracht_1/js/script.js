//javascript code
function myFunction()
{
var i;
var myOutput = "";

for (i = 0; i < 5; i++) {
    myOutput += "The number is " + i + "<br>";
  }
  document.getElementById("myOutput").innerHTML = myOutput;
}
