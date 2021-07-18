//GLOBAL

const correctColor = 'green';
const wrongColor = 'red';

var cond1,cond2;
var cond1icon,cond2icon;


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
    // var cvvText = document.getElementByClassName('cvv-text'); // you need to use for loops

    cond1 = 'cvv-cond-1';
    cond1icon = 'cvv-cond-1-icon';
    cond2 = 'cvv-cond-2';
    cond2icon = 'cvv-cond-2-icon';

    // alert(cvv.match(/^[0-9]+$/));

    // //condition 1
    // if (cvv.match(/^[0-9]+$/) != null ) {
    //     truePart(cond1,cond1icon,1);
    // } else {
    //     falsePart(cond1,cond1icon,1);
    // }

    
    //condition 2
    // cvv = parseInt(cvv);
    alert(cvv);
    if (cvv <= 999 && cvv >= 100) {
        truePart(cond2,cond2icon,2);
    } else {
        falsePart(cond2,cond2icon,2);
    }
}

function truePart(a,aIcon,n) {
    alert('true-inner' + n);
    document.getElementById(a).style.color = correctColor;

    document.getElementById(aIcon).classList.remove('fa-times-circle');
    document.getElementById(aIcon).classList.add('fa-check-circle');
}

function truePart(a,aIcon,n) {
    alert('false-inner' + n);
    document.getElementById(a).style.color = wrongColor;

    document.getElementById(aIcon).classList.remove('fa-check-circle');
    document.getElementById(aIcon).classList.add('fa-times-circle');
}




.footer-btn-disabled {
    /* background-color: rgba(0, 128, 128, 0.712); */
    background-color:var(--smoke);

    padding: 10px 30px;
    border-radius: 40px;
}

.footer-btn-disabled:hover {
    /* background-color: rgb(0, 128, 128); */
    background-color:var(--red);
    box-shadow: 0px 0px 10px var(--red);
    opacity: 0.8;
}

.footer-btn-enabled {
    /* background-color: rgba(0, 128, 128, 0.712); */
    background-color:#75232D;

    padding: 10px 30px;
    border-radius: 40px;
}

.footer-btn-enabled:hover {
    /* background-color: rgb(0, 128, 128); */
    background-color:var(--red);
    box-shadow: 0px 0px 10px var(--red);
    opacity: 0.8;
}