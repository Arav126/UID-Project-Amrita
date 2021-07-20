//GLOBAL

const correctColor = '#0b0';
const wrongColor = '#ee1d3d';

var cond1,cond2;
var cond1icon,cond2icon;

var JS1,JS2,JS31,JS32,JS41,JS42;

//JS 1
function cardNameCheck() {
    var cardName = document.payForm.cardNameName.value;
    // alert(cardName);

    cond1 = document.getElementById('card-name-cond-1');
    cond1icon = document.getElementById('card-name-cond-1-icon');

    //condition 1
    // alert(cardName.match(/^[a-zA-Z\s]*$/i));//i is for CASE INSENSITIVE
    //takes only space and alphabets.. no numbers1
    if (cardName.match(/^[a-zA-Z\s]*$/i) != null ) {
        truePart(cond1,cond1icon,1);
        JS1 = 1;
    } else {
        falsePart(cond1,cond1icon,1);
        JS1 = 0;
    }

    submitCheck();//calling submission check

}

//JS2
function expiryCheck() {
    var expiry = document.payForm.expiryName.value;
    // alert(expiry);
    // alert(typeof(expiry));
    var now = new Date();
    var dt1 = Date.parse(now);//present date
    var dt2 = Date.parse(expiry);//expired

    cond1 = document.getElementById('expiry-cond-1');
    cond1icon = document.getElementById('expiry-cond-1-icon');

    // alert(dt1 + 'lol' + dt2);

    if(dt2 > dt1) {
        // alert('your card is expired');
        falsePart(cond1,cond1icon,1);
        JS2 = 0;
    } else {
        truePart(cond1,cond1icon,1);
        JS2 = 1;
    }

    submitCheck();//calling submission check

}

//JS3
function cardNoCheck() {
    // alert('called');
    var cardNo = document.payForm.cardNoName.value;
    // alert(cardNo);
    cond1 = document.getElementById('card-no-cond-1');
    cond1icon = document.getElementById('card-no-cond-1-icon');
    cond2 = document.getElementById('card-no-cond-2');
    cond2icon = document.getElementById('card-no-cond-2-icon');

    //condition 1
    // alert(cardNo.match(/^[0-9]+$/));

    if (cardNo.match(/^[0-9]+$/) != null ) {
        truePart(cond1,cond1icon,1);
        JS31 = 1;
    } else {
        falsePart(cond1,cond1icon,1);
        JS31 = 0;
    }

    //condition 2
    // alert(cardNo);
    if (cardNo <= 9999999999999999n && cardNo >= 1000000000000000) {
        truePart(cond2,cond2icon,2);
        JS32 = 1;
    } else {
        falsePart(cond2,cond2icon,2);
        JS32 = 0;
    }

    submitCheck();//calling submission check

}

//JS4
function cvvCheck() {
    // alert('inside');
    var cvv = document.getElementById('cvv').value;
    // var cvvText = document.getElementByClassName('cvv-text'); // you need to use for loops

    cond1 = document.getElementById('cvv-cond-1');
    cond1icon = document.getElementById('cvv-cond-1-icon');
    cond2 = document.getElementById('cvv-cond-2');
    cond2icon = document.getElementById('cvv-cond-2-icon');

    //condition 1
    // alert(cvv.match(/^[0-9]+$/));

    if (cvv.match(/^[0-9]+$/) != null ) {
        truePart(cond1,cond1icon,1);
        JS41 = 1;
    } else {
        falsePart(cond1,cond1icon,1);
        JS41 = 0;
    }

    //condition 2
    // alert(cvv);
    if (cvv <= 999 && cvv >= 100) {
        truePart(cond2,cond2icon,2);
        JS42 = 1;
    } else {
        falsePart(cond2,cond2icon,2);
        JS42 = 0;
    }

    submitCheck();//calling submission check

}

function truePart(a,aIcon,n) {
    // alert('true-inner-' + n);
    a.style.color = correctColor;

    aIcon.classList.remove('fa-times-circle');
    aIcon.classList.add('fa-check-circle');
}

function falsePart(a,aIcon,n) {
    // alert('false-inner-' + n);
    a.style.color = wrongColor;

    aIcon.classList.remove('fa-check-circle');//check
    aIcon.classList.add('fa-times-circle');
}

function submitCheck() {
    var submit = document.getElementById('submit-btn-id');

    if(JS1 == 1 && JS2 == 1 && JS31 == 1 && JS32 == 1 && JS41 == 1 && JS42==1) {
        // alert('enabled');
        submit.disabled = false;
    } else {
        // alert('disabled');
        submit.disabled = true;
    }
}

