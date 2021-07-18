//GLOBAL

const correctColor = 'green';
const wrongColor = 'red';

var correctColor = ;
var wrongColor = '';

//JS 1
function cardNameCheck() {
    var cardName = document.getElementById('name-on-card').value;


}

//JS2
function expiryCheck() {
    var expiry = document.getElementById('expiry').value;


}

//JS3
function cardNoCheck() {
    var cardNo = document.getElementById('card-no').value;


}

//JS4
function cvvCheck() {
    alert('inside');
    var cvv = document.getElementById('cvv').value;
    var cvvText = document.getElementByClassName('cvv-text');

    alert(cvv);
    if (cvv <= 999 && cvv >= 100) {
        cvvText.style.color = 'green';
    } else {
        cvvText.style.color = wrongColor;
    }
}