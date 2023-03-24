let numberCake = 10;


function play() {
    let userNumber = document.getElementById("userNumber").value;
    let message;




    if (isNaN(userNumber)==true) {
        message = "Co masz na myśli???";
    } else if (userNumber>10) {
        message = "No i to rozumiem!!";   
    } else if (userNumber*numberCake<=0) {
        message = "Co masz na myśli???"; 
    } else if (userNumber == 1) {
        message = "Bez przesady! Tak źle to nie ma";  
    } else if (userNumber == 2) {
        message = "Skoro tak uważasz....";
    } else if (userNumber*numberCake==100) {
        message = "No i elegancko!! Też tak uważam";
    } else if (userNumber == 3) {
        message = "Chyba nalałeś sobie kawę z kuchni"; 
    } else if (userNumber == 4) {
        message = "Jesteś pewny? Może napij się jeszcze raz"; 
      } else if (userNumber == 5) {
        message = "5 to dobra ocena, ale w innej skali ;)"; 
      } else if (userNumber == 6) {
        message = "Czyli uważasz, że wyrzuciliśmy pieniądze w błoto....."; 
      } else if (userNumber == 7) {
        message = "Chyba jednak Dawid bardziej przyłożył się do zaparzania niż na 7"; 
      } else if (userNumber == 8) {
        message = "Jesteś pewny że 8? Może jednak dasz wyższą ocenę?"; 
    } else if (userNumber == 9) {
        message = "Prawie trafiłeś w prawidłową odpowiedź :)"; 
}
    document.getElementById("message").innerHTML = message;
}
