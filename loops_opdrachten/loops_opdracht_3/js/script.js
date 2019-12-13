//javascript code
function myFunction()
{
var nummer = "";

for (i= 1; i <=50; i++) {
    nummer += "<br> number is " + i;
    
    if(i == 20 || i == 40 ){
        document.getElementById("myOutput").innerHTML = nummer += " Dit is een mooie getaal";
}
document.getElementById("myOutput").innerHTML = nummer;
}
}