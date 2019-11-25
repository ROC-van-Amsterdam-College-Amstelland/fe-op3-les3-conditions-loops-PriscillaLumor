//javascript code
function getSaldo(){
    var mySaldo =20;

    if(mySaldo >= 25){
        document.getElementById("saldo").innerHTML= "Je hebt voldoende saldo om € 25 op te nemen."
    } else {
        document.getElementById("saldo").innerHTML= "Sorry, je hebt te weinig saldo!"
    }
}