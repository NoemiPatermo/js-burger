// programma dovrà consentire di calcolare il prezzo del panino 
//selezionando o deselezionando gli ingredienti proposti.

//al click su somma-button, il js somma tutti i numeri selezionati

var generaPrezzo = document.getElementById('somma-button');

// il prezzo
var price = document.getElementById('your-price');

var userCoupon = document.getElementById("discount");

// al click sul mio calculate, si avvia la funzione, prendendo come prezzo base 20
//che verrà incrementato nel ciclo for 

generaPrezzo.addEventListener('click', function () {
    
    var resultSumInt = 20;

    var check = document.getElementsByClassName('somma-check');
    var userBurger = document.getElementById("order-burger").value;
    document.getElementById("burger-name").innerHTML = userBurger;

    for (var i = 0; i < check.length; i++){
        if (check[i].checked){

            resultSumInt += parseInt(check[i].value);
        }
        
    
    } if(userCoupon.value.length === 6){
        document.getElementById('your-price').innerHTML =  " $ "  + parseInt(resultSumInt - 20 / 100).toFixed(2);
    } else{
        price.innerHTML =  " $ "  +  resultSumInt.toFixed(2);
        userBurger.innerHTML = document.getElementsByClassName("burger-name");
    }
    })

