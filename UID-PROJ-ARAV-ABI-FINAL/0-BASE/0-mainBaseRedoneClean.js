//GLOBAL




// Function to toggle the MENU
function menuToggle() {
    // alert("lol");
    var stages = document.getElementById("stages");//entire  block
    if (stages.style.top == "0px") {
        stages.style.top = "initial";
        stages.style.zIndex = "2";
    } else {
        stages.style.zIndex = "-2";
        stages.style.top = "0px";
    }
}