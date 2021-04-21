alert("貴方のiPhoneはおめでとうウイルスに感染しました");
alert("ウイルスを除去するには並河からプレゼントを受け取る必要があります");


let img = document.getElementById("img");
let angle = 0;
setInterval(aaa,10);
function aaa (){
        img.style.transform = "rotate(" + angle + "deg)";
    
    angle++;
}