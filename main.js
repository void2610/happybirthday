let img = document.getElementById("img");
let angle = 0;
setInterval(aaa,10);
function aaa (){
    img.style.transform = "rotate(" + angle + "deg)";
    angle++;
}