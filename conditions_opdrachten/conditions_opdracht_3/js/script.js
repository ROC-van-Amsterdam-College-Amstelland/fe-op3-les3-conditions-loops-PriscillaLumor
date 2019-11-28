//javascript code
function getSaldo(){
    var mySaldo = 0;

    if(mySaldo == 500){
        document.getElementById("saldo").innerHTML= "Salaris is gestort."
    } else if(mySaldo == 0){
        document.getElementById("saldo").innerHTML= "Geen geld gestort"
    } else {
        document.getElementById("saldo").innerHTML= "Salaris en bonus is gestort!"
    }
}