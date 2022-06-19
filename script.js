let box = document.getElementById("box");
let colourbutton = document.getElementById("colorbutton");
console.log(colourbutton);

colourbutton.onclick=function (){
    let colourvalue = document.getElementById("colour").value;
    console.log(colourvalue);
    box.style.background=colourvalue;
}
let heightbutton = document.getElementById("heightbutton")
heightbutton.onclick  =function (){
    let heigthvalue = document.getElementById("height").value;
    box.style.height = heigthvalue + "px";
}
let  widthbutton = document.getElementById("widthbutton")
widthbutton.onclick= function () {
    let widthvalue = document.getElementById("width").value;
    box.style.width = widthvalue + "px";
}

