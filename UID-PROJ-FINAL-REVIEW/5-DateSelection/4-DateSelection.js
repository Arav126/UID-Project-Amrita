
function travellerCount() {
    var i = document.getElementById('no-of-traveller').value;//wow this is a string
    //alert(i);
    var j;
    j = parseInt(i);

    var traveller1 = document.getElementById('traveller1');
    var traveller2 = document.getElementById('traveller2');
    var traveller3 = document.getElementById('traveller3');
    var traveller4 = document.getElementById('traveller4');

    var main = document.getElementById('parentContainer');

    switch(j) {
        case 1: 
            traveller1.style.display = 'block';
            traveller2.style.display = 'none';
            traveller3.style.display = 'none';
            traveller4.style.display = 'none';//to get it right when going back to prev option
            main.style.height = '100vh';
            break;
        case 2:
            traveller1.style.display = 'block';
            traveller2.style.display = 'block';
            traveller3.style.display = 'none';
            traveller4.style.display = 'none';
            main.style.height = '115vh';
            //alert('reached 2');
            break;
        case 3:
            traveller1.style.display = 'block';
            traveller2.style.display = 'block';
            traveller3.style.display = 'block';
            traveller4.style.display = 'none';
            main.style.height = '130vh';
            break;
        case 4:
            traveller1.style.display = 'block';
            traveller2.style.display = 'block';
            traveller3.style.display = 'block';
            traveller4.style.display = 'block';
            main.style.height = '145vh';
            break;
        default:
            //alert('wrong input');
            break;
    }

    //alert('end');
}


var JS1;
function dateCheck1() {
    //alert('called');
    var birth = document.dateForm.birthName1.value;
    //alert(birth);
    ////alert(typeof(birth));
    var now = new Date('2003-07-20');
    var dt1 = Date.parse(now);//present date
    var dt2 = Date.parse(birth);//expired

    //cond1 = document.getElementById('birth-cond-1');
    //cond1icon = document.getElementById('birth-cond-1-icon');

    //alert(dt1 + 'lol' + dt2);

    if(dt2 > dt1) {
        //alert('you are under 18');
        // falsePart(cond1,cond1icon,1);
        JS1 = 0;
    } else {
        // truePart(cond1,cond1icon,1);
        JS1 = 1;
        //alert('you are above 18');
    }
    var a = document.getElementById('child1');
     submitCheck(a);//calling submission check

}

// COPIES 

function dateCheck2() {
    //alert('called');
    var birth = document.dateForm.birthName2.value;
    //alert(birth);
    ////alert(typeof(birth));
    var now = new Date('2003-07-20');
    var dt1 = Date.parse(now);//present date
    var dt2 = Date.parse(birth);//expired

    //cond1 = document.getElementById('birth-cond-1');
    //cond1icon = document.getElementById('birth-cond-1-icon');

    //alert(dt1 + 'lol' + dt2);

    if(dt2 > dt1) {
        //alert('you are under 18');
        // falsePart(cond1,cond1icon,1);
        JS1 = 0;
    } else {
        // truePart(cond1,cond1icon,1);
        JS1 = 1;
        //alert('you are above 18');
    }

    var a = document.getElementById('child2');
     submitCheck(a);//calling submission check

}

function dateCheck3() {
    //alert('called');
    var birth = document.dateForm.birthName3.value;
    //alert(birth);
    ////alert(typeof(birth));
    var now = new Date('2003-07-20');
    var dt1 = Date.parse(now);//present date
    var dt2 = Date.parse(birth);//expired

    //cond1 = document.getElementById('birth-cond-1');
    //cond1icon = document.getElementById('birth-cond-1-icon');

    //alert(dt1 + 'lol' + dt2);

    if(dt2 > dt1) {
        //alert('you are under 18');
        // falsePart(cond1,cond1icon,1);
        JS1 = 0;
    } else {
        // truePart(cond1,cond1icon,1);
        JS1 = 1;
        //alert('you are above 18');
    }
    var a = document.getElementById('child3');
     submitCheck(a);//calling submission check

}

function dateCheck4() {
    //alert('called');
    var birth = document.dateForm.birthName4.value;
    //alert(birth);
    ////alert(typeof(birth));
    var now = new Date('2003-07-20');
    var dt1 = Date.parse(now);//present date
    var dt2 = Date.parse(birth);//expired

    //cond1 = document.getElementById('birth-cond-1');
    //cond1icon = document.getElementById('birth-cond-1-icon');

    //alert(dt1 + 'lol' + dt2);

    if(dt2 > dt1) {
        //alert('you are under 18');
        // falsePart(cond1,cond1icon,1);
        JS1 = 0;
    } else {
        // truePart(cond1,cond1icon,1);
        JS1 = 1;
        //alert('you are above 18');
    }
    var a = document.getElementById('child4');
     submitCheck(a);//calling submission check

}

function mainCheck() {
    //alert('called');
    var birth = document.dateForm.departureDate.value;
    //alert(birth);
    ////alert(typeof(birth));
    var now = new Date();
    var dt1 = Date.parse(now);//present date
    var dt2 = Date.parse(birth);//expired

    //cond1 = document.getElementById('birth-cond-1');
    //cond1icon = document.getElementById('birth-cond-1-icon');

    //alert(dt1 + 'lol' + dt2);

    if(dt2 > dt1) {
        //alert('okay');
        // falsePart(cond1,cond1icon,1);
        // JS1 = 0;
    } else {
        // truePart(cond1,cond1icon,1);
        // JS1 = 1;
        alert('Date has already passed.');
    }
    // var a = document.getElementById('child4');
    //  submitCheck(a);//calling submission check

}


// MAIN 

function submitCheck(check) {
    var submit = document.getElementById('submit-btn');

    if(JS1==1) {
        //alert('enabled');
        // submit.disabled = false;
        check.checked = "true";
    } else if(JS1==0) {
        //alert('disabled');
        // submit.disabled = true;
        check.checked = "false";
    }
}