
var g;
var i = 0;


function enroute() {
    alert(g);

    if(g=="delhi"){
        window.open('../s3-Enroute/s3-Delhi/delhi.html');
    } else if(g=="bombay") {
        window.open('../s3-Enroute/s3-Bombay/BombayToHyderabad.html');
    } else if(g=="kolkata") {
        window.open('../s3-Enroute/s3-Kolkata/kolkata.html');
    } else if(g=="chennai") {
        window.open('../s3-Enroute/s3-Chennai/stage31.html');
    } else if(g=="gujarat") {
        window.open('../s3-Enroute/s3-Gujarat/GujaratToHyderabad.html');
    }

    alert('end');
}

function mainLink() {
    
    g = document.whereForm.radios.value;
    // alert(g);

    ++i;
    if(i==3){
        window.open('../4-DestinationsRedone/SubCoverAbi.html');
    }
    
}