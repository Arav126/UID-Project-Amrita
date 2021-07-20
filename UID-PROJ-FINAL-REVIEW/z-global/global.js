

var i = 0;

function enroute(lol){
   

    if(lol=="delhi"){
        window.open("../s3-Enroute/s3-Delhi/delhi.html");
    } else if(lol=="bombay") {
        window.open('../s3-Enroute/s3-Bombay/BombayToHyderabad.html');
    } else if(lol=="kolkata") {
        window.open('../s3-Enroute/s3-Kolkata/kolkata.html');
    } else if(lol=="chennai") {
        window.open('../s3-Enroute/s3-Chennai/stage31.html');
    } else if(lol=="gujarat") {
        window.open('../s3-Enroute/s3-Gujarat/GujaratToHyderabad.html');
    }

    alert('end');
}

function mainLink() {
    
    var g = document.whereForm.radios.value;
    alert(g);
    
    ++i;
    if(i==3){
        location.href="../4-DestinationsRedone/SubCoverAbi.html";
        return g;
    }

}
var lol=mainLink();