//javascript code
function myFunction()
{
var i;
var myOutput = "";

for(i=20; i>=0; i--) {
    myOutput += "The number is " + i + "<br>";
    console.log(i);
  }
  document.getElementById("myOutput").innerHTML = myOutput;
}
