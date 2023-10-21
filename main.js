var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var lx, ly;
var MouseEvent = "";
var color = " ";
var radius = " ";
var width = " ";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    width = document.getElementById("width").value;
    MouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    MouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    MouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var cx = e.clientX - canvas.offsetLeft;
    var cy = e.clientY - canvas.offsetTop;
    if (MouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(cx,cy,radius,0,2*Math.PI);
        ctx.moveTo(cx, cy);
        ctx.stroke();
    }
    lx = cx;
    ly = cy;

}