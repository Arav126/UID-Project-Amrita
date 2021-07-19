//GLOBAL




// Function to toggle the MENU
function menuToggle() {
    //alert("lol");
    // var stages = document.getElementById("stages");//entire  block
    // if (stages.style.top == "0px") {
    //     stages.style.top = "initial";
    // } else {
    //     stages.style.top = "0px";
    // }

    // document.getElementById('stages').classList.toggle('active');
    // document.getElementById('stages').classList.toggle('inactive');

    var stages = document.getElementById("stages");//entire  block
    if (stages.style.height == "0px") {
        stages.style.height = "8.2vh";
        for(var i=0;i<7;i++)
        document.getElementsByClassName('div-stages')[i].style.opacity = "1";
    } else {
        stages.style.height = "0px";
        for(var i=0;i<7;i++)
        document.getElementsByClassName('div-stages')[i].style.opacity = "0";
    }
}