
function travellerCount() {
    var i = document.getElementById('no-of-traveller').value;//wow this is a string
    alert(i);
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
            main.style.height = '95vh';
            break;
        case 2:
            traveller1.style.display = 'block';
            traveller2.style.display = 'block';
            traveller3.style.display = 'none';
            traveller4.style.display = 'none';
            main.style.height = '105vh';
            alert('reached 2');
            break;
        case 3:
            traveller1.style.display = 'block';
            traveller2.style.display = 'block';
            traveller3.style.display = 'block';
            traveller4.style.display = 'none';
            main.style.height = '120vh';
            break;
        case 4:
            traveller1.style.display = 'block';
            traveller2.style.display = 'block';
            traveller3.style.display = 'block';
            traveller4.style.display = 'block';
            main.style.height = '135vh';
            break;
        default:
            alert('wrong input');
            break;
    }

    alert('end');
}



function dateCheck() {
    var birth = document.payForm.birthName.value;
    alert(birth);
    //alert(typeof(birth));
    var now = new Date();
    var dt1 = Date.parse(now);//present date
    var dt2 = Date.parse(birth);//expired

    cond1 = document.getElementById('birth-cond-1');
    cond1icon = document.getElementById('birth-cond-1-icon');

    alert(dt1 + 'lol' + dt2);

    if(dt2 > dt1) {
        alert('you are under 18');
        // falsePart(cond1,cond1icon,1);
    } else {
        // truePart(cond1,cond1icon,1);
        // JS2 = 1;
        alert('cool');
    }

    // submitCheck();//calling submission check

}