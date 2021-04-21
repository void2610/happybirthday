alert("貴方のiPhoneはおめでとうウイルスに感染しました");
alert("ウイルスを除去するには並河からプレゼントを受け取る必要があります");


let img = document.getElementsByTagName("img");;
let angle = 0;
setInterval(aaa,10);
function aaa (){
    for(let i = 0; i < 27; i++){
        img[i].style.transform = "rotate(" + angle + "deg)";
    }
    angle++;
}