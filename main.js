canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lx,ly;
var mouseEvent="Empty";
color="blue";
wly=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    cpmx=e.clientX-canvas.offsetLeft;
    cpmy=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wly;
        ctx.arc(cpmx,cpmy,40,0,2*Math.PI);
        ctx.stroke();
    }
}