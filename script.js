const cardNumDefault = document.getElementById('card-number-default')
const cardNameDefault = document.getElementById('card-name-default')
const cardExpiryDefault = document.getElementById('card-expiry-default')
const cardCvcDefault = document.getElementById('card-cvc-default')

const userName = document.getElementById('name')
const cardNumber = document.getElementById('card-number')
const cardMonth = document.getElementById('month')
const cardYear = document.getElementById('year')
const cardCvc = document.getElementById('cvc')
const confirmBtn = document.getElementById('confirm-btn')
const userForm = document.getElementById('user-form')
const letters = /^[A-Za-z]+$/;






userForm.addEventListener('submit', function(e) {
    e.preventDefault();


    validInputs();
   

});

const setError = function(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = function(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidCardNumber = function(cardNumber){
    const regex = /^[0-9]{16}$/;
    return regex.test(cardNumber);
}

const isValidMonth = function(month){
    const regex = /^[0-9]{2}$/;
    return regex.test(month);
}

const validInputs = function(){
    const userNameValue = userName.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const cardMonthValue = cardMonth.value.trim();
    const cardYearValue = cardYear.value.trim();
    const cardCvcValue = cardCvc.value.trim();

    if(userNameValue === ''){
        setError(userName, 'Name cannot be blank');
    }else{
        setSuccess(userName);
        cardNameDefault.innerHTML = userNameValue;
    }

    if(cardNumberValue === ''){
        setError(cardNumber, 'Card Number cannot be blank');
    }else if(!isValidCardNumber(cardNumberValue)){
        setError(cardNumber, 'Card Number must be 16 digits');
    }else{
        setSuccess(cardNumber);
        cardNumDefault.innerHTML = cardNumberValue;
    }

    if(cardMonthValue === ''){
        setError(cardMonth, 'Month cannot be blank');
    } else if(!isValidMonth(cardMonthValue)){
        setError(cardMonth, 'Month must be 2 digits');
    }else{
        setSuccess(cardMonth);
        cardExpiryDefault.innerHTML = cardMonthValue + '/' + cardYearValue;
    }

    if(cardYearValue === ''){
        setError(cardYear, 'Year cannot be blank');
    }else{
        setSuccess(cardYear);
    }

    if(cardCvcValue === ''){
        setError(cardCvc, 'CVC cannot be blank');
    }else{
        setSuccess(cardCvc);
        cardCvcDefault.innerHTML = cardCvcValue;
    }
}