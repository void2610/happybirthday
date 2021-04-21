let img = document.getElementsByTagName("img");;
let angle = 0;
setInterval(aaa,10);
function aaa (){
    for(let i = 0; i < 27; i++){
        img[i].style.transform = "rotate(" + angle + "deg)";
    }
    angle++;
}