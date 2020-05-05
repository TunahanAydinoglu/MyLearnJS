const amount = document.getElementById("amount");
const firstCur = document.getElementById("firstCurrency");
const secondCur = document.getElementById("secondCurrency");


const currency = new Currency("USD","TRY");
const ui = new UI(firstCur,secondCur);


eventListeners();

function eventListeners(){
    amount.addEventListener("input",exchangeCurrency);
    firstCur.onchange = function(){
        currency.changeFirtCurrency(firstCur.options[firstCur.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondCur.onchange = function(){
        currency.changeSecondCurrency(secondCur.options[secondCur.selectedIndex].textContent);
        ui.changeSecond();
    };

}

function exchangeCurrency(){
currency.changeAmount(amount.value);

    currency.exchange()
    .then(result => {ui.displayResult(result)})
    .catch(err => console.log(err));
}
