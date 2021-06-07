// programma dovrà consentire di calcolare il prezzo del panino 
//selezionando o deselezionando gli ingredienti proposti.
var createSum = document.getElementById('somma-button');
var resultSumElement = document.getElementById('result-sum');


createSum.addEventListener('click', function () {
 var priceBurger = 50;
 var resultSumInt = 0;
 var checkNum = document.getElementsByClassName('somma-check');
 for (var i = 0; i < checkNum.length; i++){
     if (checkNum[i].checked){

         resultSumInt += parseInt(checkNum[i].value)
     }
     if(discount.value.length === 11){
        
     }
 }

 resultSumElement.innerHTML = 'il risultato è ' + resultSumInt;
})

