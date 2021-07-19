//GLOBAL




// Function to toggle the MENU
function menuToggle() {
    // alert("lol");
    var stages = document.getElementById("stages");//entire  block
    if (stages.style.top == "0px") {
        stages.style.top = "initial";
    } else {
        stages.style.top = "0px";
    }

    // document.getElementById('stages').classList.toggle('active');
    // document.getElementById('stages').classList.toggle('inactive');
}