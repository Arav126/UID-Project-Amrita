

function cvvCheck() {
    var cvv = document.getElementById('cvv').value;
    var tick = document.getElementById('tick');

    alert(cvv);
    if (cvv <= 999 && cvv >= 100) {
        tick.style.color = "green";
    } else {
        tick.style.color = "red";
    }
}