// programma dovrà consentire di calcolare il prezzo del panino 
//selezionando o deselezionando gli ingredienti proposti.

//al click su somma-button, il js somma tutti i numeri selezionati

var generaPrezzo = document.getElementById('somma-button');

// il prezzo
var price = document.getElementById('your-price');
//var discountCoupon = 10;
var userCoupon = document.getElementsByClassName("discount");


generaPrezzo.addEventListener('click', function () {
 
 var resultSumInt = 0 ;

 var check = document.getElementsByClassName('somma-check');
 
 for (var i = 0; i < check.length; i++){
     if (check[i].checked){

         resultSumInt += parseInt(check[i].value)
     }
   /*  if(userCoupon.value.length === 6){
        resultSumInt -= resultSumInt * discountCoupon / 100;
     }*/
 }

 price.innerHTML = 'Il costo del tuo burger è:  ' +  " $ "  +  resultSumInt.toFixed(2);
})

