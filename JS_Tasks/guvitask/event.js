var div = document.createElement("div");
div.id = "demo";
div.innerHTML = "fdkjgbknv"
document.body.appendChild(div);

function changeColor(){
    document.getElementById("demo").style.color = "red";
}
function change(){
    document.getElementById("demo").style.color = "black";
}
a = document.getElementById("demo");
a.addEventListener("mouseover", changeColor);
a.addEventListener("mouseout", change);
