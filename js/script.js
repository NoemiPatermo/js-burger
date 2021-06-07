// programma dovrà consentire di calcolare il prezzo del panino 
//selezionando o deselezionando gli ingredienti proposti.

//al click su somma-button, il js somma tutti i numeri selezionati

var generaPrezzo = document.getElementById('somma-button');

// il prezzo
var price = document.getElementById('your-price');

var userCoupon = document.getElementById("discount");


generaPrezzo.addEventListener('click', function () {
 
 var resultSumInt = 20;

 var check = document.getElementsByClassName('somma-check');

 for (var i = 0; i < check.length; i++){
     if (check[i].checked){

         resultSumInt += parseInt(check[i].value);
     }
     
    
} if(userCoupon.value.length === 6){
    document.getElementById('your-price').innerHTML = 'Il costo del tuo burger è:  ' +  " $ "  + parseInt(resultSumInt - 20 / 100).toFixed(2);
}
 
 else{
    price.innerHTML = 'Il costo del tuo burger è:  ' +  " $ "  +  resultSumInt.toFixed(2);
 }
})

