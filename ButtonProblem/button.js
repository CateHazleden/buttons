/*function box1() {
    let x = document.getElementById("flowers").src;

    document.getElementById("invOne").innerHTML = x;
  }

  function box1() {
    var x = document.getElementById("invOne");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function box2() {
    var x = document.getElementById("invTwo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/
function box1() {

    let x = document.getElementById("flowers").src = "Images/floral_2.png";

    document.getElementById("invOne").innerHTML = x;

    document.getElementById("defaultText").style.display = "none";

}